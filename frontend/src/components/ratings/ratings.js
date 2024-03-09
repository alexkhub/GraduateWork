import Rating from './rating/rating';
import './ratings.css';

function Ratings() {
    return (
        <>
            <div className="rating-content">
                <div className="ratings">
                    <Rating
                        subjectName='Разработка БД'
                        lecturer='Гагиева Вероника'
                        score='3'
                    />
                    <Rating
                        subjectName='Питон'
                        lecturer='Караев Чермен'
                        score='5'
                    />
                </div>
            </div>
        </>
    )
}

export default Ratings;