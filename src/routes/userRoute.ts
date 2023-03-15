import { userController } from "./../controllers/user.controller";
import express from "express";

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/all", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);


export default router;
module.exports = router;
