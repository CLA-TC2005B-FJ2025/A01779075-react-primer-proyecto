import React from 'react'
import { Tarjeta } from './Tarjeta'

import MarioImage from "/imagenes/Mario.png"
import LuigiImage from "/imagenes/Luigi.png"
import PeachImage from "/imagenes/Peaches.png"

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombres="Mario" colorfavorito="Rojo" image={MarioImage}/>
        <Tarjeta nombres="Luigi" colorfavorito="Verde" image={LuigiImage}/>
        <Tarjeta nombre="Peach" colorfavorito="Rosa" image={PeachImage}/>
    </div>
  )
}
