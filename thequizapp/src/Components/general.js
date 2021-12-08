import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function General (){
        const questions1 = [
            {
                questionsText: "Which of these letters is not a vowel",
                anwserOptions:[
                    {anwserText: "O", isCorrect:false},
                    {anwserText: "I", isCorrect:false},
                    {anwserText: "W", isCorrect:true},
                    {anwserText: "A", isCorrect:false},
                ],
            },
            
        {
            questionsText: "How many sides does a heptagon is have?",
                anwserOptions:[
                    {anwserText: "14", isCorrect:false},
                    {anwserText: "12", isCorrect:false},
                    {anwserText: "7", isCorrect:true},
                    {anwserText: "8", isCorrect:false},
                ],
            },
            {
                questionsText: "How long is one regular term for a U.S Representative",
                anwserOptions:[
                    {anwserText: "10", isCorrect:false},
                    {anwserText: "6", isCorrect:false},
                    {anwserText: "2", isCorrect:true},
                    {anwserText: "4", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the lowest prime number?",
                anwserOptions:[
                    {anwserText: "5", isCorrect:false},
                    {anwserText: "3", isCorrect:false},
                    {anwserText: "0 ", isCorrect:false},
                    {anwserText: "2", isCorrect:true},
                ],
            },
            {
                questionsText: "Who was the first person to step foot on the moon?",
                anwserOptions:[
                    {anwserText: "Alan Shepard", isCorrect:false},
                    {anwserText: "John Glenn", isCorrect:false},
                    {anwserText: "Neil Armstrong", isCorrect:true},
                    {anwserText: "Edwin \"Buzz\" Aldrin", isCorrect:false},
                ],
            },
            {
                questionsText: "Inca civilizations were concentrated on what continent?",
                anwserOptions:[
                    {anwserText: "North America", isCorrect:false},
                    {anwserText: "South America", isCorrect:true},
                    {anwserText: "Asia", isCorrect:false},
                    {anwserText: "Europe", isCorrect:false},
                ],
            },
            {
                questionsText: "What state is the Grand Canyon in?",
                anwserOptions:[
                    {anwserText: "South Dakota", isCorrect:false},
                    {anwserText: "Arizona", isCorrect:true},
                    {anwserText: "California", isCorrect:false},
                    {anwserText: "New Mexico", isCorrect:false},
                ],
            },
            {
                questionsText: "Who was the first president of the United States?",
                anwserOptions:[
                    {anwserText: "George Washington", isCorrect:true},
                    {anwserText: "John Adams", isCorrect:false},
                    {anwserText: "Thomas Jefferson", isCorrect:false},
                    {anwserText: "Abraham Lincoln", isCorrect:false},
                ],
            },
            {
                questionsText: "What are longitudes also called?",
                anwserOptions:[
                    {anwserText: "Parallels", isCorrect:false},
                    {anwserText: "Meridians", isCorrect:true},
                    {anwserText: "Great circle", isCorrect:false},
                    {anwserText: " None of the above", isCorrect:false},
                ],
            },
            {
                questionsText: "What are animals without backbones known as?",
                anwserOptions:[
                    {anwserText: "Invertebrates ", isCorrect:true},
                    {anwserText: "Vertebrates", isCorrect:false},
                    {anwserText: "Carnivores", isCorrect:false},
                    {anwserText: " Omnivores", isCorrect:false},
                ],
            },
            {
                questionsText: "What island is considered an island and continent?",
                anwserOptions:[
                    {anwserText: "Vatican city", isCorrect:false},
                    {anwserText: "Monaco", isCorrect:false},
                    {anwserText: "Australia", isCorrect:true},
                    {anwserText: "Africa", isCorrect:false},
                ],
            },
            {
                questionsText: " What is the thinnest layer of the earth?",
                anwserOptions:[
                    {anwserText: "Outer Core", isCorrect:false},
                    {anwserText: "Inner Core", isCorrect:false},
                    {anwserText: "Crust", isCorrect:true},
                    {anwserText: "Mantle", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the most spoken language in South America?",
                anwserOptions:[
                    {anwserText: "Spanish", isCorrect:true},
                    {anwserText: "English", isCorrect:false},
                    {anwserText: "Portuguese", isCorrect:false},
                    {anwserText: "German", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Are you smarter than a 5th Grader Quiz</p>
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
                <div  className= {isShowing? "btn-grid": "btn-grid2"}> 
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
