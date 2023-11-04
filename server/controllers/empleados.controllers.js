
import { json } from 'express'
import {pool} from '../db.js'

export const getEmpleados = async (req, res) => {
   try{     
    const [result] = await  pool.query ("SELECT * FROM empleados ORDER BY createAt ASC");
   
    res.json(result);
    } catch(error){
      return res.status(500).json({ message: error.message});
    }
 
};
export const getEmpleado = async (req, res) => {
   try{     
    const [result] = await  pool.query ("SELECT * FROM empleados WHERE id = ?",[
        req.params.id,]);
        if (result.length == 0)
        return res.status(404).json({message: "Task not found"});
        
    res.json(result[0]);
    } catch(error){
        return res.status(500).json({ message: error.message});
    }
 
};
   
 export const createEmpleado =async (req, res) => {
   try{
   
       const {nombre,tipo} =req.body;
       const result = await pool.query(
       "INSERT INTO empleados(nombre,tipo) VALUES(?,?)",
       [nombre, tipo]
       );
       
       console.log(result);
       res.send("creando tareas");
      } catch(error){
      return res.status(500).json({ message: error.message});
     }

};



export const updateEmpleado = async(req, res) => {
   try{
       const result = await pool.query("UPDATE empleados SET ? WHERE id = ?",[
           req.body,
           req.params.id,
       ]);
       res.json(result);
   } catch(error){
      return res.status(500).json({ message: error.message});
   }
   
};

 export const delateEmpleado = async(req, res) => {
   try{
       const [result]= await pool.query("DELETE FROM empleados WHERE id =?",[
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
    