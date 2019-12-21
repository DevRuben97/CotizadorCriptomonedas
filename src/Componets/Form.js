import React,{useState,useEffect} from 'react';


export default function Form(props){

    const [Moneda,SetMoneda]= useState('');
    const [Cripto, SetCripto]= useState('');
    

    function SaveData(){
        const Obj= {
            Currency: Moneda,
            Criptomoneda: Cripto
        };
        props.ExecuteCotizacion(Obj);
    }
    function ValidateData(){
        if (Moneda=== '' && Cripto=== ''){
            return true;
        }
        else if (Moneda!== '' && Cripto=== ''){
            return true;
        }
        else{
           return false;
        }
    }
    return (
        <div>
            <h2 className="text-white">Cotiza tus Criptomonedas</h2>
             <div className="form-group">
                 <label>Selecciona tu moneda</label>
             <select className="form-control" onChange={(e)=> SetMoneda(e.target.value)}>
                <option selected disabled value="default">--Selecciona--</option>
                <option value="USD">Dolar Estadounidense (USD)</option>
                <option value="USD">Peso Dominicano (DOP)</option>
             </select>
             </div>
             <div className="form-group">
                 <label>Selecciona tu criptomoneda</label>
             <select className="form-control" onChange={(e)=> SetCripto(e.target.value)} disabled={Moneda=== ''? true: false}>
             <option selected disabled value="default">--Selecciona--</option>
                <option value="ET">Eteriun</option>
                <option value="BT">Bitcoin</option>
             </select>
             </div>
             <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block" onClick={SaveData} disabled={ValidateData}>Cotizar Moneda</button>
             </div>
        </div>
    )
}