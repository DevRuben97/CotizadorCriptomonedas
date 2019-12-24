
//Resources
import React, {useState, useEffect} from 'react';
import CriptoImage from '../Img/CriptoImage.png';

//Componests
import Form from './Form';
import Spinner from './LoadingSpinner'
import Quotation from './Quotation';


//Functions
import {GetCryptocurrencysHistory} from '../Http/Cryptocurrency';



function App() {

  const[Loading,setLoanding]= useState(false);
  const [QuotationResult, SetQuotation]= useState({});
  
  function ExecuteCotizacion(Data){
    const RequestData= async ()=> {
      setLoanding(true);
      var {data}= await GetCryptocurrencysHistory(Data);
      console.log(data.DISPLAY[Data.CriptoCurrency][Data.Currency]);
      setTimeout(()=>{
        SetQuotation(data.DISPLAY[Data.CriptoCurrency][Data.Currency]);
        setLoanding(false);
      },3000)
    }
    RequestData();
    
  }
  function ShowResults(){
    if (Loading){
      return (
        <Spinner></Spinner>
      )
    }
    else {
      return (
       <Quotation Data={QuotationResult}></Quotation>
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
