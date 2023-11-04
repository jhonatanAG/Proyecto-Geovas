import React, { useState } from 'react';
import {Form,Formik} from 'formik' ;
import {createStockRequest}from "../api/stock.api"
import './StockForm.css';

function StockFormedit() {
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
            method: 'PUT',
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
        console.log('Formulario  actualizado enviado:', formValues);
      };

  return (
    <div className="registro-container">
    <h2>Editar piezas al stock</h2>
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
        
        
        <button type="submit">Guardar</button>
      </form>

    </div>
  );
}

export default StockFormedit