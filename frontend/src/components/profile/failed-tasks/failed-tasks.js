import SliderItem from './slider-item/slider-item';
import { useState } from 'react';
import './failed-tasks.css';

function FailedTasks() {
    const sliderLineItems = document.querySelectorAll('.failed-tasks-slider-line div');
    let maxOffset = (sliderLineItems.length - 6) * 330;

    let [left, leftOffset] = useState(20)

    function offsetSliderLeft() {
        left -= 330;
        if (left < -maxOffset) {
            left = 0;
        }
        leftOffset(left);
    }

    function offsetSliderRight() {
        left += 300;
        if (left > 0) {
            left = 20;
        }
        leftOffset(left);
    }

    return (
        <div className="failed-tasks">
            <p className="failed-tasks-title">Просроченные задания</p>
            <i onClick={offsetSliderRight} className="fas fa-chevron-left"></i>
            <div style={{ left: left }} className="failed-tasks-slider-line">

                <SliderItem
                    teacherName='Гагиева В.Л.'
                    subjectName='ПМ 01'
                    taskDate='28.12.2023'
                    taskStatus='Просрочено'
                />

                <SliderItem
                    teacherName='Гагиева В.Л.'
                    subjectName='ПМ 01'
                    taskDate='28.12.2023'
                    taskStatus='Просрочено'
                />

                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
            </div>
            <i onClick={offsetSliderLeft} className="fas fa-chevron-right"></i>
        </div>
    )
}

export default FailedTasks;