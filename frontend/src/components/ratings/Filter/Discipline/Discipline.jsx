import './Discipline.css'

function Discipline(props) {
    return (
        <div className="discipline">
            <input type="checkbox" name="" id={props.id}/>
            <label htmlFor={props.id}>{props.disciplineName}</label>
        </div>
    )
}

export default Discipline;