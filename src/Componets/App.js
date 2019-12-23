
//Resources
import React, {useState} from 'react';
import CriptoImage from '../Img/CriptoImage.png';

//Componests
import Form from './Form';
import Spinner from './LoadingSpinner'
import CriptoCurrencyData from './CriptoCurrencyData';


//Functions
import {GetCryptocurrencysHistory} from '../Http/Cryptocurrency';



function App() {

  const[Loading,setLoanding]= useState(false);
  
  function ExecuteCotizacion(Data){
    //GetCryptocurrencysHistory(Data);
    setLoanding(true);

    setTimeout(()=>{
      setLoanding(false);
    },2000)
  }
  function ShowResults(){
    if (Loading){
      return (
        <Spinner></Spinner>
      )
    }
    else{
      return (
       <CriptoCurrencyData></CriptoCurrencyData>
      )
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 ContenedorImagen">
        <img src={CriptoImage} className="ImagenCriptomonedas"></img>
        </div>
        <div className="col-md-5 ContenedorImagen">
          <Form ExecuteCotizacion={ExecuteCotizacion}></Form>
          <br/>
        </div>
      </div>
      <div className="row">
       {ShowResults()}
      </div>
    </div>
  );
}

export default App;
