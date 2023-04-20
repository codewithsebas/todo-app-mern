import express from "express"
import { addTask, getAllTasks, completedTask, updateTask, deleteTask } from "../controller/taskController.js";

const route = express.Router();

route.post('/', addTask)
route.get('/', getAllTasks)
route.get('/:id', completedTask)
route.put('/:id', updateTask)
route.delete('/:id', deleteTask)

export default route;