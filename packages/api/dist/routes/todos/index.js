"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
const express_1 = __importDefault(require("express"));
const getItem_controller_1 = require("./getItem.controller");
const getItems_controller_1 = require("./getItems.controller");
const updateItem_controller_1 = require("./updateItem.controller");
const deleteItem_controller_1 = require("./deleteItem.controller");
const createItem_controller_1 = require("./createItem.controller");
exports.todos = express_1.default.Router();
exports.todos.get("/item/:id", getItem_controller_1.getItem);
exports.todos.get("/", getItems_controller_1.getItems);
exports.todos.put("/item/:id/toggle", updateItem_controller_1.updateItem);
exports.todos.delete("/item/:id", deleteItem_controller_1.deleteItem);
exports.todos.post("/", createItem_controller_1.createItem);
