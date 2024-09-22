// import express from 'express';
// import { getBook } from '../controller/Book.controller';

// const router =express.Router();

// router.get('/',getBook)

// export default router;


import express from "express";
import { getBook } from "../controller/Book.controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;