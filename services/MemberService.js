import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkMembers() {
    // Retrieve all members with their borrowings count
    const members = await prisma.member.findMany({
        include: {
            borrowings: true,
        },
    });

    return members.map((member) => ({
        id: member.id,
        code: member.code,
        name: member.name,
        numBorrowings: member.borrowings.length,
    }));
}
