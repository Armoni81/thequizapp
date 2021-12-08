import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Spongebob (){
        const questions1 = [
            {
                questionsText: "What instrument does Squidward play?",
                anwserOptions:[
                    {anwserText: "Violin", isCorrect:false},
                    {anwserText: "Drums", isCorrect:false},
                    {anwserText: "Clarinet", isCorrect:true},
                    {anwserText: "Piano", isCorrect:false},
                ],
            },
            
        {
            questionsText: "What type of animal is Mr.Krabs daughter,Pearl?",
                anwserOptions:[
                    {anwserText: "Dolphin", isCorrect:false},
                    {anwserText: "Seahorse", isCorrect:false},
                    {anwserText: "Whale", isCorrect:true},
                    {anwserText: "Crab", isCorrect:false},
                ],
            },
            {
                questionsText: "Where does Sandy Cheeks hail from?",
                anwserOptions:[
                    {anwserText: "Texas", isCorrect:true},
                    {anwserText: "Tennessee", isCorrect:false},
                    {anwserText: "Montana", isCorrect:false},
                    {anwserText: "London", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the name of King Neptunes daughter?",
                anwserOptions:[
                    {anwserText: "Pearl", isCorrect:false},
                    {anwserText: "Miley", isCorrect:false},
                    {anwserText: "Sarah ", isCorrect:false},
                    {anwserText: "Mindy", isCorrect:true},
                ],
            },
            {
                questionsText: "What does SpongeBob and Patrick use to drown their sorrows in \"The SpongeBob SquarePants Movie\" ?",
                anwserOptions:[
                    {anwserText: "Brownies", isCorrect:false},
                    {anwserText: "Soda", isCorrect:false},
                    {anwserText: "Ice Cream", isCorrect:true},
                    {anwserText: "Krabby Pattys", isCorrect:false},
                ],
            },
            {
                questionsText: "What do Mermaid Man and Barnacle Boy use to get from place to place?",
                anwserOptions:[
                    {anwserText: "The batmobile", isCorrect:false},
                    {anwserText: "The invisible boatmobile", isCorrect:true},
                    {anwserText: "A submarine", isCorrect:false},
                    {anwserText: " Sail boat", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the name of SpongeBob's favorite amusement park?",
                anwserOptions:[
                    {anwserText: "The Twirling Krab", isCorrect:false},
                    {anwserText: "Disney World", isCorrect:false},
                    {anwserText: "Jelly World", isCorrect:false},
                    {anwserText: "Glove World", isCorrect:true},
                ],
            },
            {
                questionsText: "Where does SpongeBob famously rip his pants?",
                anwserOptions:[
                    {anwserText: "Boating school", isCorrect:false},
                    {anwserText: "THe Krusty Krab", isCorrect:false},
                    {anwserText: "Goo Lagoon", isCorrect:true},
                    {anwserText: "Maxine Waters ", isCorrect:false},
                ],
            },
            {
                questionsText: "What ghost pirate haunts Bikini Bottom?",
                anwserOptions:[
                    {anwserText: "The Fisherman", isCorrect:false},
                    {anwserText: "Davy Jones", isCorrect:false},
                    {anwserText: "Flying Dutchman", isCorrect:true},
                    {anwserText: " Captain Hook", isCorrect:false},
                ],
            },
            {
                questionsText: "When is the best time to wear a striped sweater?",
                anwserOptions:[
                    {anwserText: "All the time", isCorrect:true},
                    {anwserText: "Never", isCorrect:false},
                    {anwserText: "Christmas", isCorrect:false},
                    {anwserText: " On the weekends", isCorrect:false},
                ],
            },
            {
                questionsText: "Who provides the voice of SpongeBob?",
                anwserOptions:[
                    {anwserText: "Jimmy Fallon", isCorrect:false},
                    {anwserText: "Paul Reubens", isCorrect:false},
                    {anwserText: "Tom Kenny", isCorrect:true},
                    {anwserText: "Jimmy Fallon", isCorrect:false},
                ],
            },
            {
                questionsText: " What is Plankton's first name?",
                anwserOptions:[
                    {anwserText: "Sebastian", isCorrect:false},
                    {anwserText: "Bill ", isCorrect:false},
                    {anwserText: "Sheldon", isCorrect:true},
                    {anwserText: "Michael ", isCorrect:false},
                ],
            },
            {
                questionsText: "Who is Planton's wife?",
                anwserOptions:[
                    {anwserText: "Karen", isCorrect:true},
                    {anwserText: "Kassie", isCorrect:false},
                    {anwserText: "Katie", isCorrect:false},
                    {anwserText: "Kathy", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate SpongeBob Quiz</p>
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
