import React from 'react';
import Slider from './Slider';
import CriptoImage1 from '../Img/Criptomonedas01.jpg';
import CriptoImage2 from '../Img/Criptomonedas02.jpg';
import CriptoImage3 from '../Img/Criptomonedas03.jpg';


function App() {
  return (
    <div>
      <div className="row">
        <div className="one-half column">
          <Slider Images= {[CriptoImage1,CriptoImage2,CriptoImage3]}></Slider>
        </div>
        <div className="six columns">
          <h2>Formulario</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
