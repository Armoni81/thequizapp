import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Geography (){
        const questions1 = [
            {
                questionsText: " Which of these U.S. states does NOT border Canada?",
                anwserOptions:[
                    {anwserText: "Alaska", isCorrect:false},
                    {anwserText: "Indiana", isCorrect:true},
                    {anwserText: "Maine", isCorrect:false},
                    {anwserText: "Minnesota", isCorrect:false},
                ],
            },
            
        {
            questionsText: "Which of these cities is NOT a national capital?",
                anwserOptions:[
                    {anwserText: "Cario", isCorrect:false},
                    {anwserText: "Bangkok", isCorrect:false},
                    {anwserText: "Sydney", isCorrect:true},
                    {anwserText: "Prague", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these countries is NOT recognized by the United Nations?",
                anwserOptions:[
                    {anwserText: "Taiwan", isCorrect:true},
                    {anwserText: "Iran", isCorrect:false},
                    {anwserText: "Israel", isCorrect:false},
                    {anwserText: "Cyprus", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these countries has the largest population?",
                anwserOptions:[
                    {anwserText: "Germany", isCorrect:false},
                    {anwserText: "Russia", isCorrect:false},
                    {anwserText: "Iran", isCorrect:false},
                    {anwserText: "Brazil", isCorrect:true},
                ],
            },
            {
                questionsText: "Which of these mountain ranges has the highest maximum elevation?",
                anwserOptions:[
                    {anwserText: "Urals", isCorrect:false},
                    {anwserText: "Rockies", isCorrect:false},
                    {anwserText: "Andes", isCorrect:true},
                    {anwserText: "Alps", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these cities has the highest population?",
                anwserOptions:[
                    {anwserText: "Singapore", isCorrect:false},
                    {anwserText: "Santiago", isCorrect:false},
                    {anwserText: "San Franciso", isCorrect:false},
                    {anwserText: " Shanghai", isCorrect:true},
                ],
            },
            {
                questionsText: "Which of these U.S. states has the largest area?",
                anwserOptions:[
                    {anwserText: "New York", isCorrect:false},
                    {anwserText: "Florida", isCorrect:false},
                    {anwserText: "Texas", isCorrect:false},
                    {anwserText: "California", isCorrect:true},
                ],
            },
            {
                questionsText: "Which of these countries has the highest life expectancy?",
                anwserOptions:[
                    {anwserText: "Argentina", isCorrect:false},
                    {anwserText: "Netherlands", isCorrect:false},
                    {anwserText: "Japan", isCorrect:true},
                    {anwserText: "China", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these countries is in Africa?",
                anwserOptions:[
                    {anwserText: "Bhutan", isCorrect:false},
                    {anwserText: "Sudan", isCorrect:true},
                    {anwserText: "Portugal", isCorrect:false},
                    {anwserText: " Ecuador", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these countries is on the Equator?",
                anwserOptions:[
                    {anwserText: "Democratic Republic of the Congo", isCorrect:true},
                    {anwserText: "Mexico", isCorrect:false},
                    {anwserText: "Egypt", isCorrect:false},
                    {anwserText: " Australia", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these countries has a capital city whose name starts with C? ",
                anwserOptions:[
                    {anwserText: "Uruguay", isCorrect:false},
                    {anwserText: "Sweden", isCorrect:false},
                    {anwserText: "Australia ", isCorrect:true},
                    {anwserText: "China", isCorrect:false},
                ],
            },
            {
                questionsText: " Which of these islands has the largest area?",
                anwserOptions:[
                    {anwserText: "Iceland", isCorrect:false},
                    {anwserText: "Great Britain", isCorrect:false},
                    {anwserText: "Cuba", isCorrect:false},
                    {anwserText: "Madagascar", isCorrect:true},
                ],
            },
            {
                questionsText: "Which of these countries is closest to Great Britain?",
                anwserOptions:[
                    {anwserText: "Belgium", isCorrect:true},
                    {anwserText: "Canada", isCorrect:false},
                    {anwserText: "Denmark", isCorrect:false},
                    {anwserText: "Russia", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Geography Quiz</p>
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
