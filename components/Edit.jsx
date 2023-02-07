"use client";

// import Error from "next/error";
// import { useReducer } from "react";
import { useQuery } from "react-query";
import { getTasks } from "../lib/helper";
// import Success from "./Success";

const Edit = ({ formId, formData, setFormData }) => {
  const { isLoading, isError, data } = useQuery(["tasks", formId], () =>
    getTasks(formId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const { task } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(formData).length === 0)
      return console.log("Dont have data");

    console.log(formData);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        onChange={setFormData}
        defaultValue={task}
        type="text"
        name="task"
        className="
          block w-full p-4 pl-10 text-sm  bg-blue-50 border border-blue-500
        text-blue-900 dark:blue-blue-400 placeholder-blue-700 dark:placeholder-blue-500 
        rounded-lg focus:ring-blue-500 focus:blue-blue-500 
        dark:border-blue-500"
        placeholder="Edit Task"
        required
      />
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        EDIT
      </button>
    </form>
  );
};

export default Edit;
