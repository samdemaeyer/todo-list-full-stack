import swaggerAutogen from 'swagger-autogen';

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

swaggerAutogen()(outputFile, endpointsFiles, doc);
