import React, { useState, useEffect } from "react";
import { GetCryptocurrencysList } from "../Http/Cryptocurrency";

export default function Form(props) {
  const [Moneda, SetMoneda] = useState("");
  const [Cripto, SetCripto] = useState("");
  const [criptoCurrency, SetCriptoCurrency] = useState([]);

  useEffect(() => {
    RequestCurrencyListData();
  }, [criptoCurrency]);

  async function RequestCurrencyListData() {
    const { data } = await GetCryptocurrencysList(15);
    SetCriptoCurrency(data.Data);
  }

  function SaveData() {
    const Obj = {
      Currency: Moneda,
      CriptoCurrency: Cripto
    };
    props.ExecuteCotizacion(Obj);
  }
  return (
    <div>
      <h2 className="text-white">Cotiza tus Criptomonedas</h2>
      <div className="form-group">
        <label>Selecciona tu moneda</label>
        <select
          className="form-control"
          onChange={e => SetMoneda(e.target.value)}
        >
          <option selected disabled value="default">
            --Selecciona--
          </option>
          <option value="USD">Dolar Estadounidense (USD)</option>
          <option value="DOP">Peso Dominicano (DOP)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libras (GBP)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Selecciona tu criptomoneda</label>
        <select
          className="form-control"
          onChange={e => SetCripto(e.target.value)}
          disabled={Moneda === "" ? true : false}>
          <option selected disabled value="default">
            --Selecciona--
          </option>

          {criptoCurrency.map((data, index) => (
            <option key={index} value={data.CoinInfo.Name}>{data.CoinInfo.FullName}</option>
          ))}
         
        </select>
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary btn-lg btn-block"
          onClick={SaveData}
          disabled= {Cripto=== ''? true: false}
        >Cotizar Moneda</button>
      </div>
    </div>
  );
}
