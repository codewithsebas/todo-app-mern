import express from "express"
import { addTask, getAllTasks, completedTask, updateTask } from "../controller/taskController.js";

const route = express.Router();

route.post('/', addTask)
route.get('/', getAllTasks)
route.get('/:id', completedTask)
route.put('/:id', updateTask)

export default route;