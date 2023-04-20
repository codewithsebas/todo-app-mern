import express from "express"
import { addTask, getAllTasks } from "../controller/taskController.js";

const route = express.Router();

route.post('/', addTask)
route.get('/', getAllTasks)

export default route;