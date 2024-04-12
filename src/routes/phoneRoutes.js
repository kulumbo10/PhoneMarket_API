import express from "express";
import PhoneController from "../controllers/phoneControllers.js";

const routes = express.Router();

//create routes 
routes.get("/phone", PhoneController.listPhones);
routes.get("/phone/:id", PhoneController.listPhoneById);
routes.post("/phone", PhoneController.registPhone);
routes.put("/phone/:id", PhoneController.updatePhoneById);
routes.put("/phone/:id", PhoneController.deletePhoneById);




export default routes;