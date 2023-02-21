import mongodb from "mongo-mock";
import { v4 as uuid } from "uuid";
import { Todo, TodoId } from "../../database/types";

mongodb.max_delay = 0;

const url = "mongodb://localhost:27020/todo";
const MongoClient = mongodb.MongoClient;
MongoClient.persist = "database/mongo.js"; //persist the data to disk

export async function getTodoInDatabase(id: TodoId): Promise<Todo | undefined> {
  return new Promise((resolve) => {
    MongoClient.connect(url, {}, function (_err: Error, client: any) {
      var db = client.db();
      var collection = db.collection("todos");
      collection.findOne({ id }, function (_err: Error, result: any) {
        resolve(result);
      });
    });
  });
}

export async function getTodosInDatabase(): Promise<Todo[]> {
  return new Promise((resolve) => {
    MongoClient.connect(url, {}, function (_err: Error, client: any) {
      var db = client.db();
      var collection = db.collection("todos");
      collection.find().toArray(function (_err: Error, result: any) {
        resolve(result);
      });
    });
  });
}

export async function createTodoInDatabase(todo: Todo): Promise<Todo> {
  const todoToCreate = {
    ...todo,
    done: false,
    id: uuid(),
  };

  return new Promise((resolve) => {
    MongoClient.connect(url, {}, function (_err: Error, client: any) {
      var db = client.db();
      var collection = db.collection("todos");
      collection.insertOne(todoToCreate, function (_err: Error, result: any) {
        resolve(result);
      });
    });
  });
}

export async function updateTodoInDatabase(id: TodoId): Promise<Todo> {
  const todo = await getTodoInDatabase(id);
  return new Promise((resolve) => {
    MongoClient.connect(url, {}, function (_err: Error, client: any) {
      var db = client.db();
      var collection = db.collection("todos");
      collection.findOneAndUpdate(
        { id },
        { $set: { done: !todo?.done } },
        function (_err: Error, result: any) {
          resolve(result.value);
        }
      );
    });
  });
}

export async function deleteTodoInDatabase(id: TodoId): Promise<void> {
  return new Promise((resolve) => {
    MongoClient.connect(url, {}, function (_err: Error, client: any) {
      var db = client.db();
      var collection = db.collection("todos");
      collection.deleteOne({ id }, resolve);
    });
  });
}
