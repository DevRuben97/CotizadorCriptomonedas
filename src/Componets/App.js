import React from 'react';
import CriptoImage from '../Img/CriptoImage.png';
import Form from './Form';


function App() {

  function ExecuteCotizacion(Data){
    alert(Data.Currency);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 ContenedorImagen">
        <img src={CriptoImage} className="ImagenCriptomonedas"></img>
        </div>
        <div className="col-md-5 ContenedorImagen">
          <Form ExecuteCotizacion={ExecuteCotizacion}></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
