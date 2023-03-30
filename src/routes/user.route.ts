import { userController } from "../controllers/user.controller";
import express from "express";

const router = express.Router();

router.post("/add", userController.addUser); //hecho
router.get("/all", userController.getAllUsers); //hecho
router.get("/get/:id", userController.getUserById); //hecho
router.get("/login/:email/:password", userController.getUserByLogin); //hecho
router.put("/update", userController.updateUser); //hecho
router.put("/banearUser/:id", userController.banearUser); //hecho
router.put("/activeUser/:id", userController.activeUser); //hecho
router.put("/loginUser/:id", userController.logInUser); 
router.put("/logOutUser/:id", userController.logOutUser); 

export default router;
module.exports = router;
