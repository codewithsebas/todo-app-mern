import Task from "../model/Task.js";

export const addTask = async (req, res) => {
  const { title, description, completed } = req.body.data;
  try {
    const newTask = await Task.create({
      title,
      description,
      completed,
    });

    await newTask.save();

    return res.status(200).json(newTask);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const completedTask = async (req, res) => {
  try {
    const taskRef = await Task.findById(req.params.id);

    const task = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      { completed: !taskRef.completed }
    );

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title },
      { description: req.body.description }
    );

    await task.save();

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
