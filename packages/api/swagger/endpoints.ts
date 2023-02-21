import type { Request, Response } from 'express';
import { app } from '../index';

const defaultTodoListItems = [
  { id: 1, text: 'Something important to do', done: true },
  { id: 2, text: 'Another something', done: false },
  { id: 3, text: 'Get a new pencil', done: false },
  { id: 4, text: 'Finish some task today', done: false },
];

export const endpoints = (): void => {
  app.get('/todos', (req: Request, res: Response) => {
    res.send(defaultTodoListItems);
  });

  app.get('/todos/item/:id', (req: Request, res: Response) => {
    const currentItem = defaultTodoListItems.find(({ id }) => id === Number(req.params.id));
    currentItem && (currentItem.done = !currentItem?.done);
    res.send(currentItem);
  });

  app.post('/todos', (req: Request, res: Response) => {
    const newItem = { text: req.body.text, id: defaultTodoListItems.length + 1, done: false };
    defaultTodoListItems.push(newItem);
    res.send(newItem);
  });

  app.put('/todos/item/:id/toggle', (req: Request, res: Response) => {
    const currentItem = defaultTodoListItems.find(({ id }) => id === Number(req.params.id));
    currentItem && (currentItem.done = !currentItem?.done);
    res.send(currentItem);
  });

  app.delete('/todos/item/:id', (req: Request, res: Response) => {
    res.send();
  });
};
