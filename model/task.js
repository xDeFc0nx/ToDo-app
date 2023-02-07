import { Schema, models, model } from "mongoose";

const taskSchema = new Schema({
  task: String,
});

const Tasks = models.task || model("task", taskSchema);
export default Tasks;
