import express from 'express';
import {check} from "../Controllers/MemberControllers.js";

const router = express.Router();

router.get('/members', check);

export default router;