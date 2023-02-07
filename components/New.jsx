"use client";

// import { useReducer } from "react";
import { useQueryClient, useMutation } from "react-query";
import Success from "./Success";
import Error from "./Error";
import { addTask, getTasks } from "../lib/helper";

// const fromReducer = (state, event) => ({
//   ...state,
//   [event.target.name]: event.target.value,
// });

const New = ({ formData, setFormData }) => {
  const queryClient = useQueryClient();
  const addMutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.prefetchQuery("task", getTasks);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0)
      return console.log("Dont have Form data");

    const { task } = formData;

    const model = {
      task: `${task}`,
    };

    addMutation.mutate(model);
  };

  if (addMutation.isLoading) return <div>Loading!</div>;
  if (addMutation.isError) return <Error message={addMutation.error.message} />;
  if (addMutation.isSuccess) return <Success message="Task Added" />;
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        onChange={setFormData}
        type="text"
        name="task"
        className="
          block w-full p-4 pl-10 text-sm  bg-green-50 border border-green-500
        text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 
        rounded-lg focus:ring-green-500 focus:border-green-500 
        dark:border-green-500"
        placeholder="Add new task"
        required
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ADD
      </button>
    </form>
  );
};

export default New;
