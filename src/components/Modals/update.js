import React from 'react'


const BACKGROUND_STYLE ={
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0,0.7)',
    zIndex: '1000'

}

const MODAL_STYLE ={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: 'rgb(255,255,255)',
    
}
export default function Modal({isOpenn,setModalClose, card}) {
    if (isOpenn){
        return (
          <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
              <div>
                <form>
                  <div>
                    <label for="name">Tarefa: </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={card.name}
                    ></input>
                  </div>
                  <div>
                    <label for="cost">Custo: </label>
                    <input
                      type="number"
                      name="cost"
                      placeholder={card.cost}
                    ></input>
                  </div>

                  <div>
                    <label for="date">Tarefa: </label>
                    <input
                      input
                      type="date"
                      name="date"
                      placeholder={card.date}
                    ></input>
                  </div>
                </form>
              </div>
              <button onClick={setModalClose}>Salvar</button>
              <button onClick={setModalClose}>Cancelar</button>
            </div>
          </div>
        );
    }
    return null
    
}
