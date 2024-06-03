import { borrowBook, checkBooks, returnBook } from "../services/BookService.js";

/**
 * @swagger
 * /borrow:
 *   post:
 *     summary: Borrow a book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Book borrowed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function borrow(req, res) {
    const { memberCode, bookCode } = req.body;

    try {
        const message = await borrowBook(memberCode, bookCode);
        res.json({ message });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

/**
 * @swagger
 * /return:
 *   post:
 *     summary: Return a book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Book returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function returnBookController(req, res) {
    const { memberCode, bookCode } = req.body;

    try {
        const message = await returnBook(memberCode, bookCode);
        res.json({ message });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve all books with available stock
 *     tags:
 *       - Books
 *     responses:
 *       '200':
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   stock:
 *                     type: integer
 *             example:
 *               books:
 *                 - id: 6
 *                   code: JK-45
 *                   title: Harry Potter
 *                   author: J.K Rowling
 *                   stock: 1
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function check(req, res) {
    try {
        const books = await checkBooks();
        res.json({ books });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}