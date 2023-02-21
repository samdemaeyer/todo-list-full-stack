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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = void 0;
// import { getTodos } from "./todo.dao";
function getTodos(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = [{}]; //await getTodos(request.params.id);
            if (todos === null || todos === void 0 ? void 0 : todos.length) {
                response.send(todos);
            }
            else {
                response.send([]);
            }
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getTodos = getTodos;
