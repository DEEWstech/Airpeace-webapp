import createHttpError from "http-errors";
import Contact from "../models/contact.model.js";


  export const contactForm = async (req, res, next) => {
    const { name, email, contact, message} = req.body;
    try {
      if (!name || !email || !contact || !message) {
        return next(createHttpError(400, "name, email and messgaes are rquired"));
      }
      const newContact = new Contact({
        name: name,
        email: email,
        contact: contact,
        message: message,
    });
    await newContact.save();
      res.status(201).json({ msg: 'Contact form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal server error' });  
    }
  };
  
   
  