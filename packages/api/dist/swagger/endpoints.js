"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const index_1 = require("../index");
const defaultTodoListItmes = [
    { id: 1, text: 'Something important to do', done: true },
    { id: 2, text: 'Another something', done: false },
    { id: 3, text: 'Get a new pencil', done: false },
    { id: 4, text: 'Finish some task today', done: false },
];
const endpoints = () => {
    index_1.app.get('/todo-list-items', (req, res) => {
        res.send(defaultTodoListItmes);
    });
    index_1.app.post('/todo-list-items', (req, res) => {
        const newItem = { text: req.body.text, id: defaultTodoListItmes.length + 1, done: false };
        defaultTodoListItmes.push(newItem);
        res.send(newItem);
    });
    index_1.app.post('/todo-list-items/:id/toggle', (req, res) => {
        const currentItem = defaultTodoListItmes.find(({ id }) => id === Number(req.params.id));
        currentItem && (currentItem.done = !(currentItem === null || currentItem === void 0 ? void 0 : currentItem.done));
        res.send(req.params);
    });
};
exports.endpoints = endpoints;
