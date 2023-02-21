"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const index_1 = require("../index");
const defaultTodoListItems = [
    { id: 1, text: 'Something important to do', done: true },
    { id: 2, text: 'Another something', done: false },
    { id: 3, text: 'Get a new pencil', done: false },
    { id: 4, text: 'Finish some task today', done: false },
];
const endpoints = () => {
    index_1.app.get('/todos', (req, res) => {
        res.send(defaultTodoListItems);
    });
    index_1.app.get('/todos/item/:id', (req, res) => {
        const currentItem = defaultTodoListItems.find(({ id }) => id === Number(req.params.id));
        currentItem && (currentItem.done = !(currentItem === null || currentItem === void 0 ? void 0 : currentItem.done));
        res.send(currentItem);
    });
    index_1.app.post('/todos', (req, res) => {
        const newItem = { text: req.body.text, id: defaultTodoListItems.length + 1, done: false };
        defaultTodoListItems.push(newItem);
        res.send(newItem);
    });
    index_1.app.put('/todos/item/:id/toggle', (req, res) => {
        const currentItem = defaultTodoListItems.find(({ id }) => id === Number(req.params.id));
        currentItem && (currentItem.done = !(currentItem === null || currentItem === void 0 ? void 0 : currentItem.done));
        res.send(currentItem);
    });
    index_1.app.delete('/todos/item/:id', (req, res) => {
        res.send();
    });
};
exports.endpoints = endpoints;
