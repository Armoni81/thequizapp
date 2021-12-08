import React from "react"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"


export default function COR(){


    const questions1 = [
        {
            questionsText: "Who is the President and CEO of City of Refugee?",
            anwserOptions:[
                {anwserText: "Bill Morgan", isCorrect:false},
                {anwserText: "Greg Washington", isCorrect:false},
                {anwserText: "Jeff Deel", isCorrect:false},
                {anwserText: "Bruce Deel", isCorrect:true},
            ],
        },
        
    {
        questionsText: "As of 2021 how many board members are apart of COR?",
            anwserOptions:[
                {anwserText: "12", isCorrect:false},
                {anwserText: "14", isCorrect:true},
                {anwserText: "10", isCorrect:false},
                {anwserText: "24", isCorrect:false},
            ],
        },
        {
            questionsText: "Which of the following Job Training courses are taught at COR?",
            anwserOptions:[
                {anwserText: "Accounting", isCorrect:false},
                {anwserText: "Dentistry", isCorrect:false},
                {anwserText: "Banking", isCorrect:true},
                {anwserText: "Construction", isCorrect:false},
            ],
        },
        {
            questionsText: "WHat is the name of the housing property owned by COR",
            anwserOptions:[
                {anwserText: "Hope Villiage", isCorrect:false},
                {anwserText: "City of Residents", isCorrect:false},
                {anwserText: "The 1300", isCorrect:true},
                {anwserText: "City of Angeles", isCorrect:false},
            ],
        },
        {
            questionsText: " What year was the warehouse property doneted to COR in downtown Atlanta?",
            anwserOptions:[
                {anwserText: "2002", isCorrect:false},
                {anwserText: "1999", isCorrect:false},
                {anwserText: "2003", isCorrect:true},
                {anwserText: "2001", isCorrect:false},
            ],
        },
        {
            questionsText: " What resturant is located on the COR campus(Atlanta)?",
            anwserOptions:[
                {anwserText: "Busy Bee Cafe", isCorrect:false},
                {anwserText: "Hot Cafe", isCorrect:false},
                {anwserText: "The Vortex", isCorrect:false},
                {anwserText: " The Atlanta Breakfast Club", isCorrect:true},
            ],
        },
        
        {
            questionsText: "What is the J17 Fund?",
            anwserOptions:[
                {anwserText: "Fund designed to admit students into a COR learning program", isCorrect:false},
                {anwserText: "Fund designed to provide transportation for children 17 and up to highschool or university", isCorrect:false},
                {anwserText: " Assistance Fund designed to provide financial assistance to minority students choosing to attend college, university, or technical school upon graduation from high school.", isCorrect:true},
                {anwserText: "None of the Above", isCorrect:false},
            ],
        },
        {
            questionsText: "Which company is a sponsor of COR?",
            anwserOptions:[
                {anwserText: "Delta", isCorrect:true},
                {anwserText: "USPS", isCorrect:false},
                {anwserText: "Publix", isCorrect:false},
                {anwserText: "Whole Foods", isCorrect:false},
            ],
        },
        {
            questionsText: "How long are the NAPA auto center class at COR?",
            anwserOptions:[
                {anwserText: "10 weeks", isCorrect:false},
                {anwserText: "12 weeks", isCorrect:false},
                {anwserText: "15 weeks", isCorrect:true},
                {anwserText: "20 weeks", isCorrect:false},
            ],
        },
        {
            questionsText: " What Organization partners with COR to deliver Software Development training?",
            anwserOptions:[
                {anwserText: "ATL Cyber", isCorrect:false},
                {anwserText: "Codesmith ", isCorrect:false},
                {anwserText: "Digital Crafts ", isCorrect:true},
                {anwserText: "NuCamp ", isCorrect:false},
            ],
        },
        {
            questionsText: "What other GA city hosts a City of Refuge campus?",
            anwserOptions:[
                {anwserText: "Thomaston, GA", isCorrect:true},
                {anwserText: "Griffin, GA", isCorrect:false},
                {anwserText: "Johns Creek, GA", isCorrect:false},
                {anwserText: "Marietta, GA", isCorrect:false},
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
<p id = "quizdisplay">Ultimate City of Refuge City</p>
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
