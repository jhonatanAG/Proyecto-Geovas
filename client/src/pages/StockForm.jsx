import React, { useState } from 'react';
import {Form,Formik} from 'formik' ;
import {createStockRequest}from "../api/stock.api"
import './StockForm.css';

function StockForm() {
    const [formValues, setFormValues] = useState({
        pieza: '',
        cliente: '',
        fecha_ingreso: null,
        numero_Serie: '',
        modelo: '',
        status_pieza: '',
        localizacion: ''
        //createAt: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la llamada POST al API utilizando los valores del formulario (formValues)
        // Por ejemplo, puedes usar la función fetch() o una librería como Axios para realizar la solicitud
        console.log(JSON.stringify(formValues));
        fetch('http://localhost:4000/stock', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
        })
        .then(response => {
            if (response.ok) {
        return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
        console.log('Formulario enviado:', formValues);
      };

  return (
    <div className="registro-container">
    <h2>Agregar piezas al stock</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pieza:
          <input type="text" name="pieza" value={formValues.pieza} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cliente:
          <input type="text" name="cliente" value={formValues.cliente} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fecha de ingreso:
          <input type="date" name="fecha_ingreso" value={formValues.fecha_ingreso} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número de serie:
          <input type="text" name="numero_Serie" value={formValues.numero_Serie} onChange={handleChange} />
        </label>
        <br />
        <label>
          Modelo:
          <input type="text" name="modelo" value={formValues.modelo} onChange={handleChange} />
        </label>
        <br />
        <label>
          Estado de la pieza:
          <input type="text" name="status_pieza" value={formValues.status_pieza} onChange={handleChange} />
        </label>
        <br />
        <label>
          Localización:
          <input type="text" name="localizacion" value={formValues.localizacion} onChange={handleChange} />
        </label>
        
        
        <button type="submit">Registrar</button>
      </form>

    </div>
  );
}

export default StockForm

//<button type ="onSubmit">Save</button>

/*

<br />
        <label>
          Fecha de creación:
          <input type="text" name="createAt" value={formValues.createAt} onChange={handleChange} />
        </label>
        <br />
        



import {Form,Formik} from 'formik' ;
import {createStockRequest}from "../api/stock.api"

function StockForm() {
  return (
    <div>
        <Formik
            initialValues={{
                pieza: "",
                cliente: "",
                
            }}
            onSubmit={async(values,actions) =>   {
                console.log(values);
                try{
                    const response = await createStockRequest(values) 
                    console.log(response);
                    actions.resetForm()
                }catch(error){
                    console.error(error)
                }
                }}
            >
                {({handleChange, handleSubmit,values,isSubmitting})=>(
                    <Form onSubmit={handleSubmit}>
                        <label>pieza</label>
                        <input type ="text"
                         name='pieza'
                        placeholder="Write a pieza"
                        onChange={handleChange}
                        value={values.pieza}
                        
                        />
                    
                    <textarea 
                        name="cliente" 
                        rows="3"
                        placeholder="Write a cliente"
                        onChange={handleChange}
                        values={values.cliente}
                        ></textarea>
                    <button type="submit"disabled={isSubmitting}>
                        {isSubmitting ? "Saving...":"Save"}
                    </button>
                 </Form> 
            
                )}

        </Formik>

    </div>
  );
}

export default StockForm

//<button type ="onSubmit">Save</button> */

















/* <Formik
            initialValues={{
                pieza: "",
                cliente: "",
                fecha_ingreso:"",
                numero_Serie:"",
                modelo:"",
                status_pieza:"",
                localizacion:"",

                
            }}
            onSubmit={async(values,actions) =>   {
                console.log(values);
                try{
                    const response = await createStockRequest(values) 
                    console.log(response);
                    actions.resetForm()
                }catch(error){
                    console.error(error)
                }
                }}
            >
                {({handleChange, handleSubmit,values,isSubmitting})=>(
                    <Form onSubmit={handleSubmit}>
                        <label>pieza</label>
                        <input type ="text"
                         name='pieza'
                        placeholder="Write a pieza"
                        onChange={handleChange}
                        value={values.pieza}
                        
                        />
                    <textarea 
                    
                        name="cliente" 
                        
                        placeholder="Write a cliente"
                        onChange={handleChange}
                        values={values.cliente}
                    ></textarea>
                    <textarea 
                        name="fecha_ingreso" 
                        
                        placeholder="Write a fecha_ingreso"
                        onChange={handleChange}
                        values={values.fecha_ingreso}
                    ></textarea>
                    <textarea 
                        name="numero_Serie" 
                        
                        placeholder="Write a numero_Serie"
                        onChange={handleChange}
                        values={values.numero_Serie}
                        ></textarea>
                    <textarea 
                        name="modelo" 
                        
                        placeholder="Write a modelo"
                        onChange={handleChange}
                        values={values.modelo}
                        ></textarea>
                    
                    <textarea 
                        name="status_pieza" 
                        
                        placeholder="Write a status_pieza"
                        onChange={handleChange}
                        values={values.status_pieza}
                        ></textarea>
                    <textarea 
                        name="localizacion" 
                        
                        placeholder="Write a localizacion"
                        onChange={handleChange}
                        values={values.localizacion}
                        ></textarea>
                   
                   

                    <button type="submit"disabled={isSubmitting}>
                        {isSubmitting ? "Saving...":"Save"}
                    </button>
                 </Form> 
            
                )}

        </Formik>
        
        */