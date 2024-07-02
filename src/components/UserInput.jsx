import React from 'react'

export default function userInput({userInput, handleChange}) {
    return (
        <section id="user-input">
        <div className='input-group'>
            <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input 
                    type="number" 
                    id="initialInvestment"
                    required
                    value={userInput.initialInvestment}
                    onChange={(e) => {handleChange("initialInvestment", e.target.value)}} />
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input 
                    type="number" 
                    id="annualInvestment"
                    required
                    value={userInput.annualInvestment}
                    onChange={(e) => {handleChange("annualInvestment", e.target.value)}} />
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label htmlFor="expectedReturn">Expected return</label>
                <input 
                    type="number" 
                    id="expectedReturn"
                    required
                    value={userInput.expectedReturn}
                    onChange={(e) => {handleChange("expectedReturn", e.target.value)}} />
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input 
                    type="number" 
                    id="duration"
                    required
                    value={userInput.duration}
                    onChange={(e) => {handleChange("duration", e.target.value)}} />
            </p>
        </div>
        </section>
    )
}
