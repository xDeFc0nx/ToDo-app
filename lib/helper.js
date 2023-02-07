const BASE_URL = "http://localhost:3000/";

// all task
export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}api/task`);
  const json = await response.json();

  return json;
};

// single task
export const getTask = async () => {
  const response = await fetch(`${BASE_URL}api/task/`);
  const json = await response.json();

  if (json) return json;

  return {};
};

// posting new task
export async function addTask(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}api/task`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}

// Update  task

export async function updateTask(taskId, formData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BASE_URL}api/task/${taskId}`, Options);

  const json = await response.json();
  return json;
}
// delete  task

export async function deleteTask(taskId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BASE_URL}api/task/${taskId}`, Options);

  const json = await response.json();
  return json;
}
