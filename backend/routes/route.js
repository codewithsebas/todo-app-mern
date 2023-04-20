import express from "express"
import { addTask } from "../controller/taskController.js";

const route = express.Router();

route.post('/tasks', addTask)

export default route;