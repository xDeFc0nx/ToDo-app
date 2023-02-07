import connectMongo from "../../../database/conn";
import {
  getTasks,
  postTask,
  putTasks,
  deleteTask,
} from "../../../database/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getTasks(req, res);
      break;
    case "POST":
      postTask(req, res);
      break;
    case "PUT":
      putTasks(req, res);
      break;
    case "DELETE":
      deleteTask(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
