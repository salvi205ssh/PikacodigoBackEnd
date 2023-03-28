import { userController } from "../controllers/user.controller";
import express from "express";

const router = express.Router();

router.post("/add", userController.addUser); //hecho
router.get("/all", userController.getAllUsers); //hecho
router.get("/get/:id", userController.getUserById); //hecho
router.get("/login/:email/:password", userController.getUserByLogin); //hecho
router.put("/update", userController.updateUser); //hecho

export default router;
module.exports = router;