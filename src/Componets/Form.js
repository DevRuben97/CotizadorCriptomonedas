import React,{useState,useEffect} from 'react';


export default function Form(props){

    const [Name,SetName]= useState('');

    function ShowData(){
        alert(Name);
    }
    return (
        <div>
            <h4>Consulte su moneda</h4>
            <form>
                <div className="row">
                <label for="Moneda"></label>
                    <input className="form-control" id="Moneda" placeholder="Su Moneda" onChange={(e)=> SetName(e.target.value)}></input>
                </div>
                <input className="btn btn-primary" type="button" value="Enviar Datos" onClick={ShowData}></input>
            </form>
        </div>
    )
}