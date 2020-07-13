import React, { Component } from 'react';
import Question from './Question/question'
import Answer from './Answer/answer'
import './quiz.css';

class Quiz extends Component{
    state = {
        quiestions: {
            1: 'Which author he is?',
            2: 'Which book is written by this author?',
            3: 'Auther name?'
        },
        answers: {
            1: {
                1: 'Jean Auel',
                2: 'Steve Augarde',
                3: 'Paul Auster'
            },
            2: {
                1: 'Macbth',
                2: 'The Shining',
                3: 'Hamlet'
            },
            3: {
                1: 'Jacob Abbott',
                2: 'Walter Abish',
                3: 'Leila Abouzeid '
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '1'
        },
        corrctAwnser:0,
        clickedAwnser: 0,
        step:1     
        }
        checkAnswer = answer => {
            const { correctAnswers, step} = this.state;
            if(answer === correctAnswers[step]){
                this.setState({
                    
                    correctAnswer: correctAnswers[step],
                    clickedAnswer: answer
                });
            }else{
                this.setState({
                    correctAnswer: 0,
                    clickedAnswer: answer
                });
            }
        }
        nextStep = (step) => {
            this.setState({
                step: step + 1,
                correctAnswer: 0,
                clickedAnswer: 0
            });
        } 
        componentWillMount(){
            this.setState({correctAnswer:0})
        }
    render(){
       let {quiestions, answers, correctAnswer, clickedAnswer, step} = this.state;
        return(
            <div className="Content">
             Quiz started
             <Question
                 question={quiestions[step]}
             /> 
             <Answer 
             answer={answers[step]}
             step={step}
             checkAnswer={this.checkAnswer}
             correctAnswer={correctAnswer}
             clickedAnswer={clickedAnswer}
             />
             {correctAnswer!==0 ?<button
                        onClick={() => this.nextStep(step)}>Next</button>:null}   
            </div>
        )
    }
}
export default Quiz;