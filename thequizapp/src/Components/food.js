import React from "react"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"


export default function Food(){


    const questions1 = [
        {
            questionsText: "Which famous soft drink was invented in 1892?",
            anwserOptions:[
                {anwserText: "Root Beer", isCorrect:false},
                {anwserText: "Pepsi", isCorrect:false},
                {anwserText: "Coke", isCorrect:true},
                {anwserText: "Fanta", isCorrect:false},
            ],
        },
        
    {
        questionsText: "What is the primary ingredient for Hummus?",
            anwserOptions:[
                {anwserText: "Yellow Squash", isCorrect:false},
                {anwserText: "Mustard", isCorrect:false},
                {anwserText: "Chickpeas", isCorrect:true},
                {anwserText: "Minced Garlic", isCorrect:false},
            ],
        },
        {
            questionsText: "What two words were combined to make the word ‘Spam’?",
            anwserOptions:[
                {anwserText: "Smart Ham", isCorrect:false},
                {anwserText: "Spiced Ham", isCorrect:true},
                {anwserText: "Small Ham", isCorrect:false},
                {anwserText: "None of the above", isCorrect:false},
            ],
        },
        {
            questionsText: "What are the names of the Rice Krispies mascots??",
            anwserOptions:[
                {anwserText: "George, Jerry and Skip", isCorrect:false},
                {anwserText: "Snap, Snip and Pop", isCorrect:false},
                {anwserText: "Snap, Crackle and Pop", isCorrect:true},
                {anwserText: "None of the above", isCorrect:false},
            ],
        },
        {
            questionsText: " What soft drink was originated in North Carolina?",
            anwserOptions:[
                {anwserText: "Fanta", isCorrect:false},
                {anwserText: "Sprite", isCorrect:false},
                {anwserText: "Pepsi-Cola", isCorrect:true},
                {anwserText: "Coke", isCorrect:false},
            ],
        },
        {
            questionsText: " Where were french fries invented ?",
            anwserOptions:[
                {anwserText: "Canada", isCorrect:false},
                {anwserText: "United States", isCorrect:false},
                {anwserText: "Greece", isCorrect:false},
                {anwserText: "Belgium ", isCorrect:true},
            ],
        },
        {
            questionsText: "Which of the following fast food restaurants was founded first?",
            anwserOptions:[
                {anwserText: "McDonalds", isCorrect:false},
                {anwserText: "In and Out", isCorrect:true},
                {anwserText: "Burger King", isCorrect:false},
                {anwserText: "KFC", isCorrect:false},
            ],
        },
        {
            questionsText: "What fast food restaurant boasts that you can \"Have it your way\"?",
            anwserOptions:[
                {anwserText: "Captain D's", isCorrect:false},
                {anwserText: "Taco Bell", isCorrect:false},
                {anwserText: "Burger King", isCorrect:true},
                {anwserText: "Subway", isCorrect:false},
            ],
        },
        {
            questionsText: "What fast food restaurant aired ads featuring Jared Fogle?",
            anwserOptions:[
                {anwserText: "WhataBurger", isCorrect:false},
                {anwserText: "Chic-Fil-A", isCorrect:false},
                {anwserText: "Subway", isCorrect:true},
                {anwserText: "Hardees", isCorrect:false},
            ],
        },
        {
            questionsText: "How many herbs and spices are in Colonel Harland Sanders’ original KFC recipe?",
            anwserOptions:[
                {anwserText: "11", isCorrect:true},
                {anwserText: "10", isCorrect:false},
                {anwserText: "9", isCorrect:false},
                {anwserText: "12", isCorrect:false},
            ],
        },
        {
            questionsText: "What animal was the star of a 1997 Taco Bell Ad Campaign?",
            anwserOptions:[
                {anwserText: "Alligator", isCorrect:false},
                {anwserText: "Grizzly Bear", isCorrect:false},
                {anwserText: "Chihuahua", isCorrect:true},
                {anwserText: "Gold Fish", isCorrect:false},
            ],
        },
        {
            questionsText: " What is the the biggest supermarket chain in the US?",
            anwserOptions:[
                {anwserText: "Ingles", isCorrect:false},
                {anwserText: "Harris Teeter ", isCorrect:false},
                {anwserText: "Kroger ", isCorrect:true},
                {anwserText: "Publix ", isCorrect:false},
            ],
        },
        {
            questionsText: "Which ingredient makes bread rise?",
            anwserOptions:[
                {anwserText: "Yeast", isCorrect:true},
                {anwserText: "Olive Oil", isCorrect:false},
                {anwserText: "Cornstarch", isCorrect:false},
                {anwserText: "Baking Soda", isCorrect:false},
            ],
        },
    ]
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [isShowing, setIsShowing] = useState(true)
const nextQuestion = currentQuestion + 1;   
const percentage = Math.floor(score/questions1.length *100)


const handleAnswerButtonClick = (isCorrect) => {

    if (isCorrect) {
        setScore(score + 1);
    }
    else {
        alert("This is incorrect 😕")
    }

    
    if (nextQuestion < questions1.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
   
};
const resetQuiz = function(){
    setCurrentQuestion (0)
    setShowScore(false)
    setScore(0)
}  
return(
<body>
<p id = "quizdisplay">Ultimate Food Quiz</p>
    {showScore ? (
            <div className = "quiz-cont">
                <div id = "container-quest">
                    
                    <p id = "question" className = "positionscore">You scored {score} out of {questions1.length}</p>
                    <p id = "question" className = "positionscore-1">{percentage}%</p>
                   
                    
                    <button onClick= {resetQuiz}id="tryAgainBtn">Try again 👀</button>
                    <img className = "brainpic" src = {brain}></img>
                    <img className = "brainpic-1" src = {brain}></img>
                    
                </div>
                
            </div>
        ) : (

    <div className = "quiz-cont" >
        <div id =  {isShowing ?"container-quest": "hide" }>
            <div id = "question">{questions1[currentQuestion].questionsText}</div>
            <div id = "anwser-buttons" className= "btn-grid"> 
                {questions1[currentQuestion].anwserOptions.map((anwserOptions) =>(
                <button  onClick = {()=>handleAnswerButtonClick(anwserOptions.isCorrect)}className= "btn">{anwserOptions.anwserText}</button>
            ))}
            </div>
            <div className = "controls-quest">
               
            </div>
            <div>
                <h3>Score</h3>
                <p id ={isShowing? "scoreboard":"scoreboard-1"}>{score}</p>
            </div>
            <div>
            
                <button  id = {isShowing ?"bigger":"bigger2"}onClick = {()=> setIsShowing(!isShowing)}>Adjust Size</button>
            </div>
    
   
        </div> 
    </div>
        )}
</body>

)

}
