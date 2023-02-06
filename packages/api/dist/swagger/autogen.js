"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const toDoListItem = {
    id: 1,
    text: 'Plan visit to friends',
    done: false,
};
const doc = {
    info: {
        version: '0.1.0',
        title: 'Todo List API',
        description: 'Api to retrieve, create and toggle todo list items',
    },
    host: 'localhost:4000',
    definitions: {
        ToDoListItems: [toDoListItem],
    },
};
const outputFile = './swagger/output.json';
const endpointsFiles = ['./swagger/endpoints.ts'];
(0, swagger_autogen_1.default)()(outputFile, endpointsFiles, doc);
