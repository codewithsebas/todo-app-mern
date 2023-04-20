// Icons
import { BsPatchCheckFill, BsPatchCheck } from "react-icons/bs";
import { TbEditCircle, TbEditCircleOff } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const Task = ({ task, setNewTask }) => {
  return (
    <div
      key={task._id}
      className={`flex flex-col gap-3 border  border-b-2 py-3 px-4 rounded-lg shadow duration-500 ${
        task.completed === false
          ? "bg-white border-b-sky-500/70"
          : "bg-slate-100 border-b-black/50"
      }`}
    >
      <div className="flex justify-between gap-3">
        <div
          className={`w-full h-full duration-500 ${
            task.completed === false ? "no-underline" : "line-through"
          }`}
        >
          <h1 className="text-lg font-medium">{task.title}</h1>
          <p className="text-[#797979]">{task.description}</p>
        </div>
        <div className="text-[#797979]">{task.createdAt}</div>
      </div>
      <div className="flex justify-between gap-3 w-full">
        <div
          className={`py-1 px-4 text-center rounded-md ${
            task.completed === false
              ? "bg-slate-100"
              : "bg-zinc-800 text-white border-black/30"
          }`}
        >
          {task.completed === false ? (
            <div className="flex gap-2 items-center text-sm">
              <BsPatchCheck /> Incompleted
            </div>
          ) : (
            <div className="flex gap-2 items-center text-sm">
              <BsPatchCheckFill /> Completed
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-2xl nocopy">
          {task.completed === false ? (
            <button
              onClick={() => {
                setNewTask(true);
              }}
              className="rounded-md outline-none text-zinc-600 active:text-zinc-800 hover:text-zinc-500 duration-200"
            >
              <TbEditCircle />
            </button>
          ) : (
            <TbEditCircleOff className="text-zinc-400 hover:text-zinc-500 duration-200 cursor-not-allowed" />
          )}
          <button
            onClick={() => handleDelete(task.id)}
            className="rounded-md text-zinc-600 active:text-zinc-800 hover:text-zinc-500 duration-200"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
