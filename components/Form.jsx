"use client";

import { useReducer } from "react";
import { useSelector } from "react-redux";

import Edit from "./Edit";
import New from "./New";

const fromReducer = (state, event) => ({
  ...state,
  [event.target.name]: event.target.value,
});

const Form = () => {
  const [formData, setFormData] = useReducer(fromReducer, {});

  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {formId
        ? Edit({ formId, formData, setFormData })
        : New({ formData, setFormData })}
    </div>
  );
};

export default Form;
