function Rating(props) {
    return (
        <div className="rating">
            <p className="rating-subject-name">{props.subjectName}</p>
            <p className="rating-lecturer">{props.lecturer}</p>
            <p className="rating-score">Оценка: {props.score}</p>
        </div>
    )
}

export default Rating;