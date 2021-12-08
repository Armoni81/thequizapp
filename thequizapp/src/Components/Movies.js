import React from "react"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"


export default function Movies(){


    const questions1 = [
        {
            questionsText: "Taraji P. Henson portrays a betrayed woman in what 2018 film?",
            anwserOptions:[
                {anwserText: "Acrimony", isCorrect:true},
                {anwserText: "Hidden Figures", isCorrect:false},
                {anwserText: "Men Want What?", isCorrect:false},
                {anwserText: "Think Like A Man", isCorrect:false},
            ],
        },
        
    {
        questionsText: "In The Matrix, what color pill does Neo take?",
            anwserOptions:[
                {anwserText: "Yellow", isCorrect:false},
                {anwserText: "Green", isCorrect:false},
                {anwserText: "Red", isCorrect:true},
                {anwserText: "Blue", isCorrect:false},
            ],
        },
        {
            questionsText: "Who was the first African American to win an Academy Award?",
            anwserOptions:[
                {anwserText: "Gabriel Union", isCorrect:false},
                {anwserText: "Halle Berry", isCorrect:false},
                {anwserText: "Hattie McDaniel", isCorrect:true},
                {anwserText: "Megan Good", isCorrect:false},
            ],
        },
        {
            questionsText: "What song was featured alot in the movie Hardball(2001)?",
            anwserOptions:[
                {anwserText: "Whistle While You Twurk- Ying Yang Twinz", isCorrect:false},
                {anwserText: "Ms.Jackson- OutKast", isCorrect:false},
                {anwserText: "Big Poppa- Notorious BIG", isCorrect:true},
                {anwserText: "Simpin on some Syrup- Three 6 Mafia", isCorrect:false},
            ],
        },
        {
            questionsText: " How many Starwars movies have been released?",
            anwserOptions:[
                {anwserText: "7", isCorrect:false},
                {anwserText: "12", isCorrect:false},
                {anwserText: "9", isCorrect:true},
                {anwserText: "13", isCorrect:false},
            ],
        },
        {
            questionsText: " What is the highest-grossing film of all time?",
            anwserOptions:[
                {anwserText: "Titanic", isCorrect:false},
                {anwserText: "The Lion King", isCorrect:false},
                {anwserText: "Avengers: End Game", isCorrect:false},
                {anwserText: " Avatar", isCorrect:true},
            ],
        },
        {
            questionsText: "\"I hate snakes\" is a line from which movie?",
            anwserOptions:[
                {anwserText: "Snakes on a Plane", isCorrect:false},
                {anwserText: "Indiana Jones", isCorrect:true},
                {anwserText: "Prey", isCorrect:false},
                {anwserText: "None of the above", isCorrect:false},
            ],
        },
        {
            questionsText: "What year was Batman & Robin released?",
            anwserOptions:[
                {anwserText: "2000", isCorrect:false},
                {anwserText: "1998", isCorrect:false},
                {anwserText: "1997", isCorrect:true},
                {anwserText: "2001 ", isCorrect:false},
            ],
        },
        {
            questionsText: "What is the highest-grossing animated film in movie history?",
            anwserOptions:[
                {anwserText: "Toy Story", isCorrect:false},
                {anwserText: "Finding Nemo", isCorrect:false},
                {anwserText: "Lion King", isCorrect:true},
                {anwserText: "The Lego Movie", isCorrect:false},
            ],
        },
        {
            questionsText: "What is the name of Will Smith's character in Men in Black?",
            anwserOptions:[
                {anwserText: "Agent J", isCorrect:true},
                {anwserText: "Smooth", isCorrect:false},
                {anwserText: "Code red", isCorrect:false},
                {anwserText: " None of the Above", isCorrect:false},
            ],
        },
        {
            questionsText: "What was the name of the coach of the Richmond Oilers?",
            anwserOptions:[
                {anwserText: "Coach Rich", isCorrect:false},
                {anwserText: "Coach Smith", isCorrect:false},
                {anwserText: "Coach Carter", isCorrect:true},
                {anwserText: "Coach O", isCorrect:false},
            ],
        },
        {
            questionsText: " Zac Efron became a breakout star in which movie??",
            anwserOptions:[
                {anwserText: "At Any Place", isCorrect:false},
                {anwserText: "17 Again ", isCorrect:false},
                {anwserText: "High School Musical ", isCorrect:true},
                {anwserText: "Hairspray ", isCorrect:false},
            ],
        },
        {
            questionsText: "Which Pixar movie featured a journey to South America in a house held up by floating balloons?",
            anwserOptions:[
                {anwserText: "Up", isCorrect:true},
                {anwserText: "Dream", isCorrect:false},
                {anwserText: "Fly", isCorrect:false},
                {anwserText: "Happy", isCorrect:false},
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
<p id = "quizdisplay">Ultimate Movies Quiz</p>
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
