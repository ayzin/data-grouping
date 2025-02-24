import express from "express";
import { getUsersGroupedByDepartment } from "../controllers/userController";

const router = express.Router();

router.get("/", getUsersGroupedByDepartment);

export default router;
