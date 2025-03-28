import React from 'react'

export function Tarjeta(props) {
  return (
    <div>
        <img src={props.image} width={150}/>
        <div>Npmbre del personaje: {props.nombre}</div>
        <div>Color favorito: {props.colorfavorito}</div>
    </div>
  )
}
