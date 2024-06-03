import {Router} from 'express';
import {borrow, check, returnBookController} from "../Controllers/BookControllers.js";

const router = Router();

router.post('/borrow', borrow);
router.post('/return', returnBookController);
router.get('/books', check);

export default router;