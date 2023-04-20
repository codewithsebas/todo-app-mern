import Task from "./Task";


const TasksList = ({ tasks, setNewTask }) => {
  return (
    <div className="w-full h-full max-w-2xl flex flex-col gap-3 pr-2">
      {tasks.map((task) => (
        <Task key={task._id} task={task} setNewTask={setNewTask} />
      ))}
    </div>
  );
};

export default TasksList;
