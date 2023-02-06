"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
exports.swaggerConfig = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'My User Project CRUD',
        description: 'My User Project Application API',
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
        },
    },
    host: 'localhost:8000',
    basePath: '/',
    tags: [
        {
            name: 'Todo List',
            description: 'API for Todo List',
        },
    ],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    paths: {
        '/todo-list-items': {
            get: {
                tags: ['Todo List Items'],
                summary: 'Get all todo list items',
                responses: {
                    '200': {
                        description: 'OK',
                        schema: {
                            $ref: '#/definitions/todo-list-items',
                        },
                    },
                },
            },
            post: {
                tags: ['Todo List Items'],
                description: 'Create new todo list item',
                parameters: [
                    {
                        name: 'text',
                        schema: {
                            $ref: '#/definitions/todo-list-items',
                        },
                    },
                ],
                produces: ['application/json'],
                responses: {
                    '200': {
                        description: 'New todo list item is created',
                        schema: {
                            $ref: '#/definitions/todo-list-items',
                        },
                    },
                },
            },
        },
    },
    definitions: {
        'todo-list-items': {
            required: ['text', 'id', 'done'],
            properties: {
                id: {
                    type: 'integer',
                    uniqueItems: true,
                },
                text: { type: 'string' },
                done: { type: 'boolean' },
            },
        },
    },
};
