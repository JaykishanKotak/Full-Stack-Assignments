import express from "express";
import {
  addItem,
  showItem,
  updateItem,
  deleteItem,
} from "../service/service.js";

const router = express.Router();

//Routes
router.get("/", addItem);
router.post("/", showItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
