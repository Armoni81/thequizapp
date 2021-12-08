import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Animals (){
        const questions1 = [
            {
                questionsText: "Which mammal is known to have the most powerful bite in the world?",
                anwserOptions:[
                    {anwserText: "Tiger", isCorrect:false},
                    {anwserText: "Alaskan Shepard", isCorrect:false},
                    {anwserText: "Hippopottamaus", isCorrect:true},
                    {anwserText: "Indian Rhinoceros", isCorrect:false},
                ],
            },
            
        {
            questionsText: "A dog sweats through which part of its body?",
                anwserOptions:[
                    {anwserText: "Ears", isCorrect:false},
                    {anwserText: "Head", isCorrect:false},
                    {anwserText: "Paws", isCorrect:true},
                    {anwserText: "Tail", isCorrect:false},
                ],
            },
            {
                questionsText: "How far away can a wolf smell its prey?",
                anwserOptions:[
                    {anwserText: "2 miles", isCorrect:true},
                    {anwserText: "1 miles", isCorrect:false},
                    {anwserText: "900 feet", isCorrect:false},
                    {anwserText: "1200 feet", isCorrect:false},
                ],
            },
            {
                questionsText: "Which animal is known to spend 90% of its day, sleeping?",
                anwserOptions:[
                    {anwserText: "Armadillos", isCorrect:false},
                    {anwserText: "Beaver", isCorrect:false},
                    {anwserText: "Grizzly Bear ", isCorrect:false},
                    {anwserText: "Koala Bear", isCorrect:true},
                ],
            },
            {
                questionsText: "What animal breathes out of its butt?",
                anwserOptions:[
                    {anwserText: "Bettles", isCorrect:false},
                    {anwserText: "Owls", isCorrect:false},
                    {anwserText: "Turtles", isCorrect:true},
                    {anwserText: "Snkaes", isCorrect:false},
                ],
            },
            {
                questionsText: "Why do frogs croak?",
                anwserOptions:[
                    {anwserText: "To clear thier throats", isCorrect:false},
                    {anwserText: "To attract food ", isCorrect:false},
                    {anwserText: "To claim territory", isCorrect:false},
                    {anwserText: " To attract a mate", isCorrect:true},
                ],
            },
            {
                questionsText: "What’s the most poisonous frog on Earth?",
                anwserOptions:[
                    {anwserText: "Strawberry Poison Dart Frog", isCorrect:false},
                    {anwserText: "The Golden Dart Frog", isCorrect:true},
                    {anwserText: "Phantasmal Poison Frog", isCorrect:false},
                    {anwserText: "Posion Dart Frog", isCorrect:false},
                ],
            },
            {
                questionsText: "How much weight can ants lift?",
                anwserOptions:[
                    {anwserText: "100 times its own weight", isCorrect:false},
                    {anwserText: "1,000 times its own weight", isCorrect:false},
                    {anwserText: "5,000 times its own weight", isCorrect:true},
                    {anwserText: "None of the above ", isCorrect:false},
                ],
            },
            {
                questionsText: "How long does the average housefly live for?",
                anwserOptions:[
                    {anwserText: "19 days", isCorrect:false},
                    {anwserText: "38 days", isCorrect:false},
                    {anwserText: "28 days", isCorrect:true},
                    {anwserText: " 45 days", isCorrect:false},
                ],
            },
            {
                questionsText: "How do female dragonflies avoid mating with undesirable males?",
                anwserOptions:[
                    {anwserText: "Play dead", isCorrect:true},
                    {anwserText: "Fly away", isCorrect:false},
                    {anwserText: "Produce a foul odor", isCorrect:false},
                    {anwserText: " None of the above", isCorrect:false},
                ],
            },
            {
                questionsText: "What part of its body does a butterfly taste with?",
                anwserOptions:[
                    {anwserText: "Their legs", isCorrect:false},
                    {anwserText: "Their wings", isCorrect:false},
                    {anwserText: "Their feet", isCorrect:true},
                    {anwserText: "Their eyes", isCorrect:false},
                ],
            },
            {
                questionsText: " What animal has the longest lifespan?",
                anwserOptions:[
                    {anwserText: "Blue whale", isCorrect:false},
                    {anwserText: "Locust", isCorrect:false},
                    {anwserText: "Giant Tortoise ", isCorrect:true},
                    {anwserText: "Elephant", isCorrect:false},
                ],
            },
            {
                questionsText: "How many times can a hummingbird flap its wings per second?",
                anwserOptions:[
                    {anwserText: "80", isCorrect:true},
                    {anwserText: "60", isCorrect:false},
                    {anwserText: "120", isCorrect:false},
                    {anwserText: "180", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Animals Quiz</p>
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
