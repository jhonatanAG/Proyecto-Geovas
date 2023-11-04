
import {Router } from "express";
import{
    getStocks,
    getStock,
    createStock,
    delateStock,
    updateStock
    

    } from '../controllers/stock.controllers.js'


const router = Router();

router.get("/stock",getStocks);

router.get("/stock/:id",getStock);

router.post("/stock",createStock);

router.put("/stock/:id",updateStock);

router.delete("/stock/:id", delateStock);

export default router;











