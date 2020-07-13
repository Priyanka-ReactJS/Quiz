import React from 'react';
import './answer.css';


const Answer = (props) => {
    let answer = Object.keys(props.answer)
    .map((qAnswer, i) => (
            <li 
            className =
            {
                props.correctAnswer === qAnswer ?
                'correct' : 
                props.clickedAnswer === qAnswer ? 
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
               {props.answer[qAnswer]}
            </li>
    ));
    return (
        <div className="image">
           <div>
               <h2>image</h2>
           </div>
        <ul className="Answers">
            {answer}
        </ul>
        </div>
    );

}

export default Answer;