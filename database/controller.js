// Controller
import Tasks from "../model/task";
// get: http://localhost:3000/api/task
export async function getTasks(req, res) {
  try {
    const tasks = await Tasks.find({});

    if (!tasks) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching" });
  }
}

// post: http://localhost:3000/api/task

export async function postTask(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data not provided" });
    Tasks.create(formData, (err, data) => res.status(200).json(data));
  } catch (error) {
    return res.status(404).json({ error });
  }
}
// put: http://localhost:3000/api/task/1
export async function putTasks(req, res) {
  try {
    const { taskId } = req.query;
    const formData = req.body;

    if (taskId && formData) {
      const task = await Tasks.findByIdAndUpdate(taskId, formData);
      res.status(200).json(task);
    }
    res.status(404).json({ error: "Task Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error while Updating the Data...!" });
  }
}
// delete: http://localhost:3000/api/task/1
export async function deleteTask(req, res) {
  try {
    const { taskId } = req.query;

    if (taskId) {
      await Tasks.findByIdAndDelete(taskId);
      return res.status(200).json({ deleted: taskId });
    }
    res.status(404).json({ error: "Task Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error while Deleting the Task..." });
  }
}
