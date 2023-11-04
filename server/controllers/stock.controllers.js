
import { json } from 'express'
import {pool} from '../db.js'

export const getStocks = async (req, res) => {
   try{     
    const [result] = await  pool.query ("SELECT * FROM stock ORDER BY createAt ASC");
   
    res.json(result);
    } catch(error){
      return res.status(500).json({ message: error.message});
    }
 
};
export const getStock = async (req, res) => {
   try{     
    const [result] = await  pool.query ("SELECT * FROM stock WHERE id = ?",[
        req.params.id,]);
        if (result.length == 0)
        return res.status(404).json({message: "Task not found"});
        
    res.json(result[0]);
    } catch(error){
        return res.status(500).json({ message: error.message});
    }
 
};
   
 export const createStock =async (req, res) => {
   try{
   
       const {pieza, cliente,fecha_ingreso,numero_serie,modelo,status_pieza,localizacion} =req.body;
       const result = await pool.query(
       "INSERT INTO stock(pieza,cliente,fecha_ingreso,numero_serie,modelo,status_pieza,localizacion) VALUES(?,?,?,?,?,?,?)",
       [pieza, cliente,fecha_ingreso,numero_serie,modelo,status_pieza,localizacion]
       );
       
       console.log(result);
       res.send("creando tareas");
      } catch(error){
      return res.status(500).json({ message: error.message});
     }

};



export const updateStock = async(req, res) => {
   try{
       const result = await pool.query("UPDATE stock SET ? WHERE id = ?",[
           req.body,
           req.params.id,
       ]);
       res.json(result);
   } catch(error){
      return res.status(500).json({ message: error.message});
   }
   
};

 export const delateStock = async(req, res) => {
   try{
       const [result]= await pool.query("DELETE FROM stock WHERE id =?",[
           req.params.id,
       ]);
       if(result.affectedRows ===0)
           return res.status(404).json({message:"Task not found"});
       return res.sendStatus(204)
   } catch(error){
       return res.status(500).json({ message: error.message});
   }



    const imgzebra = "";
};
    