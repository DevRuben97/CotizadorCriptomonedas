import React from "react";

export default function Quotation(props) {
  const { Data } = props;
  if (Object.keys(Data).length === 0) return null;

  return (
    <div className="ResultsContent mx-auto">
      <h2>Resultados</h2>
      <h2>
        Precio es: <span>{Data.PRICE}</span>
      </h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>
              Precio mas alto del dia: <span>{Data.HIGHDAY}</span>
            </h4>
            <br />
            <h4>Variación ultimas 24 horas: {Data.CHANGEPCT24HOUR}%</h4>
          </div>
          <div className="col-md-5">
            <h4>
              Precio mas bajo del dia: <span>{Data.LOWDAY}</span>
            </h4>
            <br />
            <h4>Cambios por dia: {Data.CHANGEPCTDAY}%</h4>
          </div>
        </div>
      </div>
      <h4>Utima Actualización {Data.LASTUPDATE}</h4>
    </div>
  );
}
