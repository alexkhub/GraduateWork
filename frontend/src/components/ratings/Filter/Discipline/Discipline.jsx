import React, { useEffect } from 'react';
import './Discipline.css'

function Discipline(props) {

    useEffect(() => {
        const inputs = document.querySelectorAll('.discipline input')
        inputs.forEach(el => {
            el.addEventListener('change', () => {
                return el.nextElementSibling.textContent
            })
        })
    }, [])

    return (
        <div className="discipline">
            <input type="radio" name="discipline" id={props.id} />
            <label htmlFor={props.id}>{props.disciplineName}</label>
        </div>
    )
}

export default Discipline;