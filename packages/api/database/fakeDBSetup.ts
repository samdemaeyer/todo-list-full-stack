import mongodb from "mongo-mock";
import { v4 as uuid } from "uuid";
import { Todo } from "./types";
mongodb.max_delay = 0;

const url = "mongodb://localhost:27020/todo";
const MongoClient = mongodb.MongoClient;
MongoClient.persist = "database/mongo.js"; //persist the data to disk

const todos = [
  {
    text: "Buy skateboard",
    id: uuid(),
    done: false,
  },
  {
    text: "Put dog on skateboard",
    id: uuid(),
    done: false,
  },
];

export async function setup(cb: () => void): Promise<void> {
  MongoClient.connect(url, {}, function (_err: Error, client: any) {
    var db = client.db();
    var collection = db.collection("todos");
    collection.insertMany(todos, function (_err: Error, result: any) {
      cb();
    });
  });
}
