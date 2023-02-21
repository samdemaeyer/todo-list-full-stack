import { NextFunction, Request, Response } from "express";
import { getTodosInDatabase } from "./todos.dao";

export async function getItems(
  _request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const todos = await getTodosInDatabase();
    if (todos?.length) {
      response.send(todos);
    } else {
      response.send([]);
    }
  } catch (error) {
    next(error);
  }
}
