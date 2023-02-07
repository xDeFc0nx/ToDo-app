import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const page = () => (
  <div className="min-h-screen bg-gray-800 py-9 ">
    <div className="relative py-3 w-[96vh]  sm:mx-auto">
      <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20  h-[90vh] bg-clip-padding bg-opacity-60 border border-gray-200">
        <div className="mb-10 content-center">
          <h1 className="text-bold text-green-600 text-[30px] ">ToDo App</h1>
        </div>
        <Form />
        <List />
      </div>
    </div>
  </div>
);

export default page;
