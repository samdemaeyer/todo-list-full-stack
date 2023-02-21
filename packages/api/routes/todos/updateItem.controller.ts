import { NextFunction, Request, Response } from "express";
import { updateTodoInDatabase } from "./todos.dao";

export async function updateItem(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const todoItem = await updateTodoInDatabase(request.params.id);
    response.send(todoItem);
  } catch (error) {
    next(error);
  }
}
