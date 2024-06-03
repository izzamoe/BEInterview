import { checkMembers } from "../services/MemberService.js";

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Retrieve all members with their borrowings count
 *     tags:
 *       - Members
 *     responses:
 *       '200':
 *         description: List of members with borrowings count
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
 *                   name:
 *                     type: string
 *                   numBorrowings:
 *                     type: integer
 *             example:
 *               members:
 *                 - id: 4
 *                   code: M001
 *                   name: Angga
 *                   numBorrowings: 0
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
        const members = await checkMembers();
        res.json({ members });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}