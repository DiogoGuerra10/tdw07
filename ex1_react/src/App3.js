import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposito, levantamento } from "./ex3/Slice";
import logo from "./generalboxofdeposits.png"; 

const App3 = () => {
  const [valor, setValor] = useState(0);
  const dispatch = useDispatch();
  const saldo = useSelector((state) => state.saldo.balance);

  const trataDeposito = () => {
    dispatch(deposito(Number(valor)));
    setValor(0); // Limpa o valor introduzido para que fique "0"
  };

  const trataLevantamento = () => {
    dispatch(levantamento(Number(valor)));
    setValor(0); // Limpa o valor introduzido para que fique "0"
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#c9dbfa",
      }}
    >
      <img src={logo} alt="Logo" style={{ width: "300px", marginBottom: "10px" }} />
      <h1 style={{ marginTop: "10px" }}>General Box Of Deposities</h1>
      <h4>Saldo Atual: {saldo}</h4>
      <input
        type="number"
        placeholder="Digite o valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        style={{ height: "40px" }}
      />
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <button
          style={{
            border: "2px solid grey",
            backgroundColor: "#e8e7ec",
            marginRight: "5px",
            padding: "5px 10px",
          }}
          onClick={trataDeposito}
        >
          Depositar
        </button>
        <button
          style={{
            border: "2px solid grey",
            backgroundColor: "#e8e7ec",
            padding: "5px 10px",
          }}
          onClick={trataLevantamento}
        >
          Levantar
        </button>
      </div>
    </div>
  );
};

export default App3;