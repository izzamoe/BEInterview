import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function borrowBook(memberCode, bookCode) {
    // Check if member exists
    const member = await prisma.member.findUnique({
        where: { code: memberCode },
        include: { borrowings: true },
    });

    if (!member) {
        throw new Error('Member not found');
    }

    // Check if member has reached borrowing limit
    if (member.borrowings.length >= 2) {
        throw new Error('Member has reached borrowing limit');
    }

    // Check if book exists and is available
    const book = await prisma.book.findUnique({ where: { code: bookCode } });

    if (!book || book.stock <= 0) {
        throw new Error('Book not available');
    }

    // Create borrow record
    await prisma.borrowRecord.create({
        data: {
            memberId: member.id,
            bookId: book.id,
        },
    });

    // Decrement book stock
    await prisma.book.update({
        where: { id: book.id },
        data: { stock: book.stock - 1 },
    });

    return 'Book borrowed successfully';
}

export async function returnBook(memberCode, bookCode) {
    // Find borrow record
    const borrowRecord = await prisma.borrowRecord.findFirst({
        where: {
            memberId: {
                equals: memberCode,
            },
            bookId: {
                equals: bookCode,
            },
        },
    });

    if (!borrowRecord) {
        throw new Error('Borrow record not found');
    }

    // Calculate penalty if book returned after 7 days
    const returnedAt = new Date();
    const borrowedAt = new Date(borrowRecord.borrowedAt);
    const diffDays = Math.ceil((returnedAt.getTime() - borrowedAt.getTime()) / (1000 * 3600 * 24));

    if (diffDays > 7) {
        // Penalize member
        await prisma.member.update({
            where: { code: memberCode },
            data: { penaltyEnd: new Date(returnedAt.getTime() + 3 * 24 * 60 * 60 * 1000) }, // Penalty for 3 days
        });
    }

    // Update borrow record
    await prisma.borrowRecord.update({
        where: { id: borrowRecord.id },
        data: { returnedAt },
    });

    // Increment book stock
    await prisma.book.update({
        where: { code: bookCode },
        data: { stock: { increment: 1 } },
    });

    return 'Book returned successfully';
}

export async function checkBooks(){
    // Retrieve all books with available stock
    const books = await prisma.book.findMany({
        where: { stock: { gt: 0 } },
    });

    return books;
}
