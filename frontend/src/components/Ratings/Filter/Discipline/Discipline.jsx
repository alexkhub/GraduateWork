import React, { useEffect } from 'react';

function Discipline(props) {

    const subjectNames = document.querySelectorAll('.rating-subject-name');
    
    // Sort ratings
    useEffect(() => {
        let selectedRadio;
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

                        // Show suitable ratings
                    } else if (el.textContent === selectedRadio) {
                        el.parentElement.style.display = 'flex'
                        setTimeout(() => {
                            el.parentElement.style.opacity = 100;
                        }, 300);
                    }
                })
            })
        })
    }, [subjectNames])

    return (
        <div className="discipline">
            <input type="radio" name="discipline" id={props.id} />
            <label className='discipline-input-label' htmlFor={props.id}>{props.disciplineName}</label>
        </div>
    )
}

export default Discipline;