import express from "express";
import { getItem } from "./getItem.controller";
import { getItems } from "./getItems.controller";
import { updateItem } from "./updateItem.controller";
import { deleteItem } from "./deleteItem.controller";
import { createItem } from "./createItem.controller";

export const todos = express.Router();

todos.get("/item/:id", getItem);

todos.get("/", getItems);

todos.put("/item/:id/toggle", updateItem);

todos.delete("/item/:id", deleteItem);

todos.post("/", createItem);
