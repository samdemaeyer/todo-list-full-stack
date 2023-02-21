import { NextFunction, Request, Response } from "express";
import { getTodoInDatabase } from "./todos.dao";

export async function getItem(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log("hello");
    const todoItem = await getTodoInDatabase(request.params.id);
    if (todoItem) {
      response.send(todoItem);
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
}
