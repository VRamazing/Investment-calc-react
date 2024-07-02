import React from 'react'
import investmentImage from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <div id="header">
        <img src={investmentImage} alt="Investment calculator image" />
        <h1>React investment calculator</h1>
    </div>
  )
}
