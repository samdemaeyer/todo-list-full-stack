import { NextFunction, Request, Response } from "express";
import { deleteTodoInDatabase } from "./todos.dao";

export async function deleteItem(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const todoItem = await deleteTodoInDatabase(request.params.id);
    response.send(todoItem);
  } catch (error) {
    next(error);
  }
}
