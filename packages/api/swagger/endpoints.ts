import type { Request, Response } from 'express';
import { app } from '../index';

const defaultTodoListItmes = [
  { id: 1, text: 'Something important to do', done: true },
  { id: 2, text: 'Another something', done: false },
  { id: 3, text: 'Get a new pencil', done: false },
  { id: 4, text: 'Finish some task today', done: false },
];

export const endpoints = (): void => {
  app.get('/todo-list-items', (req: Request, res: Response) => {
    res.send(defaultTodoListItmes);
  });

  app.post('/todo-list-items', (req: Request, res: Response) => {
    const newItem = { text: req.body.text, id: defaultTodoListItmes.length + 1, done: false };
    defaultTodoListItmes.push(newItem);
    res.send(newItem);
  });

  app.post('/todo-list-items/:id/toggle', (req: Request, res: Response) => {
    const currentItem = defaultTodoListItmes.find(({ id }) => id === Number(req.params.id));
    currentItem && (currentItem.done = !currentItem?.done);
    res.send(req.params);
  });
};
