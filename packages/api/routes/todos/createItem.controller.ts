import { NextFunction, Request, Response } from "express";
import { createTodoInDatabase } from "./todos.dao";

export async function createItem(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const todoItem = await createTodoInDatabase(request.body);
    response.send(todoItem);
  } catch (error) {
    next(error);
  }
}
