
import {Router } from "express";
import{
    getEmpleados,
    getEmpleado,
    createEmpleado,
    delateEmpleado,
    updateEmpleado
    

    } from '../controllers/empleados.controllers.js'


const router = Router();

router.get("/empleados",getEmpleados);

router.get("/empleados/:id",getEmpleado);

router.post("/empleados",createEmpleado);

router.put("/empleados/:id",updateEmpleado);

router.delete("/empleados/:id", delateEmpleado);

export default router;
