import React, { useEffect, useState } from 'react';
import   {getStockRequest} from '../api/stock.api'
import './StockPage.css';


function StockPage() {
    const [datos, setDatos] = useState([]);

    useEffect(() => { 
        fetch('http://localhost:4000/stock/')
        .then(response => response.json())
        .then(data => setDatos(data))
        .catch(error => console.log(error));
    }, []);

    
    const handleEditar = (id) => {
      console.log(id)
       return (<StockFormedit/>);

    };
    
    const handleBorrar = (id) => {
  
    };



     return (
<div className="datos-container">
      <h2>Datos</h2>
      <div className="datos-grid">
        {datos.map(dato => (
          <div key={dato.id} className="dato-card">
            <h3>{dato.pieza}</h3>
            <p>Cliente: {dato.cliente}</p>
            <p>Fecha de ingreso: {dato.fecha_ingreso}</p>
            <p>Número de serie: {dato.numero_Serie}</p>
            <p>Modelo: {dato.modelo}</p>
            <p>Estado de la pieza: {dato.status_pieza}</p>
            <p>Localización: {dato.localizacion}</p>
            <p>Fecha de creación: {dato.createAt}</p>
            <button onClick={() => handleEditar(dato.id)}>Editar</button>
            
            <button onClick={() => handleBorrar(dato.id)}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
      );
}


export default StockPage