export type TodoId = string;

export interface Todo {
  id: TodoId;
  text: string;
  done: boolean;
}