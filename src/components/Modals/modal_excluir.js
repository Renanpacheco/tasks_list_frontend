//import zIndex from '@mui/material/styles/zIndex'
//import { Padding } from '@mui/icons-material'
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
export default function Modal({isOpenn,setModalClose, children}) {
    if (isOpenn){
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>
                        {children}
                    </div>
                    <button onClick={setModalClose}>Sim</button>
                    <button onClick={setModalClose}>Não</button>
                </div>
            </div>
        )
    }
    return null
    
}
