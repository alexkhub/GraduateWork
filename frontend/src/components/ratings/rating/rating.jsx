import './Rating.css'

function Rating(props) {
    return (
        <div className="rating">
            <p className="rating-subject-name">{props.subjectName}</p>
            <p className="rating-lecturer">{props.lecturer}</p>
            <p className="rating-score">Оценка: {props.score}</p>
            <p className="rating-date">Дата: {props.date}</p>
        </div>
    )
}

export default Rating;