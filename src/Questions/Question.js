import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Question.css'; // Import the CSS file

const Question = () => {
    const { name } = useParams();
    const [questions, setQuestions] = useState([]);
    const [click,setClick] = useState(true);
    let url = `https://quizapi.io/api/v1/questions?apiKey=LsiZBzl7Y3CrECqcIlZMiqybW6gp1vFZritGJEq9&category=${name}&difficulty=Easy&limit=20`;
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                if(res.ok){
                    const data = await res.json();
                    setQuestions(data);
                }
                else{
                    console.log("Error in fetching");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []); 

    const clicked = ()=>{
        setClick(true);
    }
    if(click){
        return(
            <div className='t-div'>
                <div className='Sucess' >
                    <h1>Sucessfully Submitted Test</h1>
                    <p>Thanks for participating!!</p>
                </div>
            </div>
        )
    }
    
    return (
        <div className="question-container">
            <h1 className='heading'>{name} Quiz</h1>
            <ul className="question-list">
                {questions.map((question, index) => (
                    <React.Fragment key={index}>
                        <p className="question-item">{index+1}.{question.question}</p>
                        {Object.keys(question.answers).map((choice, choiceIndex) => (
                            question.answers[choice] != null && (
                                <div key={`${question.id}-d-${choiceIndex}`} className='options'>
                                    <input type='radio' name={`question-${index}`} value={choice} id={`${question.id}-${index}-${choiceIndex}`} className="choice-input" />
                                    <label htmlFor={`${question.id}-${index}-${choiceIndex}`} className="choice-label" key={`${question.id}-${index}-${choiceIndex}`}>
                                        {question.answers[choice]}
                                    </label><br />
                                </div>
                            )
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            <button className='q-btn' onClick={clicked}>Submit</button>
        </div>
    );
}

export default Question;
