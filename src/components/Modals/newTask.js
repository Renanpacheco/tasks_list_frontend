import React from "react";
import axios from "axios";


const BACKGROUND_STYLE = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
  zIndex: "1000",
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "150px",
  backgroundColor: "rgb(255,255,255)",
};
export default function Modal({ isOpenn, setModalClose, children }) {
  if (isOpenn) {
    const { name, cost, date_limit } = children
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>{children}</div>
          <button onClick={()=>{
            axios.post('http://localhost:5000/create', {
              name,
              cost,
              date_limit
            }).then(function(response) {
              console.log("Dados salvos", response.data)
            }).catch(function(error){console.log(error)})
            
            }
            
          }>Salvar</button>
          <button onClick={setModalClose}>Cancelar</button>
        </div>
      </div>
    );
  }
  return null;
}
