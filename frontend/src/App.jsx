import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

// Functions
import { getAllTasks } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

// Icons
import { BsPatchPlus } from "react-icons/bs";

function App() {
  const [newTask, setNewTask] = useState(false);

  const dispatch = useDispatch();
  // Tasks from the DATABASE
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <main className="bg-[#fdfdfd] w-full h-screen flex flex-col gap-5 justify-start items-center px-4">
      <nav className="w-full max-w-2xl mt-10">
        <h1 className="font-semibold text-3xl">
          Hello and welcome to this Notes App
        </h1>
        <p className="text-lg text-black/50 font-medium">
          You´ve got {tasks.length} tasks coming up in the next days.
        </p>
      </nav>
      <div className="w-full flex justify-between max-w-2xl pr-2">
        <button
          onClick={() => setNewTask(!newTask)}
          className="bg-white flex gap-3 outline-none items-center shadow-md text-base text-zinc-800  font-medium py-2 px-4 rounded-lg duration-200 active:shadow-lg active:border-zinc-300 border"
        >
          <BsPatchPlus className="text-xl" />
          <p>Create a new note</p>
        </button>
      </div>
      <div
        className={`absolute bg-zinc-950/30 w-full h-full flex justify-center items-center duration-200 ${
          newTask
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <TaskForm setNewTask={setNewTask} />
      </div>
      <div className="w-full h-full max-w-2xl overflow-auto">
        {tasks.length <= 0 ? (
          <p className="w-full h-full flex items-center justify-center text-lg text-black/50 font-medium">
            Create a new Note!
          </p>
        ) : (
          <TasksList tasks={tasks} setNewTask={setNewTask} />
        )}
      </div>
    </main>
  );
}

export default App;
