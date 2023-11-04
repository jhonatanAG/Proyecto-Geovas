import { Router } from "express";
import {
    getTasks,getTask,createTask,updateTask,delateTask

}from "../controllers/task.controllers.js";
 
const router = Router();

router.get("/tasks",getTasks);

router.get("/tasks/:id",getTask);

router.post("/tasks",createTask);

router.put("/tasks/:id",updateTask);

router.delete("/tasks/:id", delateTask);

export default router; 


