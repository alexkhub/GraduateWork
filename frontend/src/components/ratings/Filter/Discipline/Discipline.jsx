import React, { useEffect } from 'react';
import './Discipline.css'

function Discipline(props) {

    let selectedRadio;
    const subjectNames = document.querySelectorAll('.rating-subject-name');
    
    // Sort ratings
    useEffect(() => {
        const inputs = document.querySelectorAll('.discipline input[type="radio"]');
        inputs.forEach(el => {
            el.addEventListener('change', () => {
                // Get selected radio
                if (el.checked) {
                    selectedRadio = el.nextElementSibling.textContent;
                }

                // Hide unsuitable ratings
                subjectNames.forEach(el => {
                    if (el.textContent !== selectedRadio) {
                        setTimeout(() => {
                            el.parentElement.style.display = 'none';
                        }, 300);
                        el.parentElement.style.opacity = 0;
                        console.log('aa')

                        // Show suitable ratings
                    } else if (el.textContent === selectedRadio) {
                        el.parentElement.style.display = 'block'
                        setTimeout(() => {
                            el.parentElement.style.opacity = 100;
                        }, 300);
                    }
                })
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