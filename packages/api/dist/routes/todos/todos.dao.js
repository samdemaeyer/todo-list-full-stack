"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoInDatabase = exports.updateTodoInDatabase = exports.createTodoInDatabase = exports.getTodosInDatabase = exports.getTodoInDatabase = void 0;
const mongo_mock_1 = __importDefault(require("mongo-mock"));
const uuid_1 = require("uuid");
mongo_mock_1.default.max_delay = 0;
const url = "mongodb://localhost:27020/todo";
const MongoClient = mongo_mock_1.default.MongoClient;
MongoClient.persist = "database/mongo.js"; //persist the data to disk
function getTodoInDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            MongoClient.connect(url, {}, function (_err, client) {
                var db = client.db();
                var collection = db.collection("todos");
                collection.findOne({ id }, function (_err, result) {
                    resolve(result);
                });
            });
        });
    });
}
exports.getTodoInDatabase = getTodoInDatabase;
function getTodosInDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            MongoClient.connect(url, {}, function (_err, client) {
                var db = client.db();
                var collection = db.collection("todos");
                collection.find().toArray(function (_err, result) {
                    resolve(result);
                });
            });
        });
    });
}
exports.getTodosInDatabase = getTodosInDatabase;
function createTodoInDatabase(todo) {
    return __awaiter(this, void 0, void 0, function* () {
        const todoToCreate = Object.assign(Object.assign({}, todo), { done: false, id: (0, uuid_1.v4)() });
        return new Promise((resolve) => {
            MongoClient.connect(url, {}, function (_err, client) {
                var db = client.db();
                var collection = db.collection("todos");
                collection.insertOne(todoToCreate, function (_err, result) {
                    resolve(result);
                });
            });
        });
    });
}
exports.createTodoInDatabase = createTodoInDatabase;
function updateTodoInDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield getTodoInDatabase(id);
        return new Promise((resolve) => {
            MongoClient.connect(url, {}, function (_err, client) {
                var db = client.db();
                var collection = db.collection("todos");
                collection.findOneAndUpdate({ id }, { $set: { done: !(todo === null || todo === void 0 ? void 0 : todo.done) } }, function (_err, result) {
                    resolve(result.value);
                });
            });
        });
    });
}
exports.updateTodoInDatabase = updateTodoInDatabase;
function deleteTodoInDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            MongoClient.connect(url, {}, function (_err, client) {
                var db = client.db();
                var collection = db.collection("todos");
                collection.deleteOne({ id }, resolve);
            });
        });
    });
}
exports.deleteTodoInDatabase = deleteTodoInDatabase;
