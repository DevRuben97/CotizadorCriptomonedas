import React, {useState} from 'react';


export default function Slider(props){

    const [CurrentImage, SetImage]= useState(props.Images[0]);

    setInterval(function(){ 
        //Cambiar la imagen cada 10 segundos.
        let Number=(Math.random() *2).toFixed(0);
        SetImage(props.Images[Number]);
    },10000);

    return (
        <div className="ContenedorImagenes">
             <img src={CurrentImage} alt="Imagen de criptomoneda" className="ImagenCriptomonedas"></img>
        </div>
    )
}