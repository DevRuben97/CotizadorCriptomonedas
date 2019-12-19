import React from 'react';
import CriptoImage from '../Img/CriptoImage.png';
import Form from './Form';


function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5">
        <img src={CriptoImage} className="ImagenCriptomonedas"></img>
        </div>
        <div className="col-md-5">
          <h2>Formulario</h2>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
