import express from "express";
import * as ContactController from "../controllers/contactForm.js";


const router = express.Router();


router.post("/contactForm", ContactController.contactForm);





export default router;