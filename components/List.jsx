"use client";

import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../lib/helper";
import { toggleChangeAction, updateAction } from "../redux/reducer";

export default function List() {
  // const state = useSelector((state) => state.app.client.toggleForm);
  const { isLoading, isError, data, error } = useQuery("tasks", getTasks);

  if (isLoading) return <div>Tasks are Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <table className="min-w-full table-auto">
      <tbody>
        {data.tasks.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ _id, task }) {
  const visible = useSelector((state) => state.app.client.toggleForm);

  const dispach = useDispatch();

  const onUpdate = () => {
    dispach(toggleChangeAction());
    if (!visible) {
      dispach(updateAction(_id));
    }
  };
  return (
    <tr>
      <td className="px-16 py-2  flex flex-row items-center">
        <span className="text-center ml-2 font-semibold">
          {task || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <button type="submit" className="crusor">
          <span
            className=" bg-green-600 hover:bg-green-800 focus:ring-4 text-white
             focus:outline-none focus:ring-green-300 px-5 py-1 rounded-full "
          >
            DONE
          </span>
        </button>
        <button onClick={onUpdate} type="submit" className="crusor">
          <span
            className=" bg-blue-600 hover:bg-blue-800 focus:ring-4 text-white
             focus:outline-none focus:ring-blue-300 px-5 py-1 rounded-full "
          >
            EDIT
          </span>
        </button>
      </td>
    </tr>
  );
}
