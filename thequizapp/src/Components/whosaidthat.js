import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Whosaidthat (){
        const questions1 = [
            {
                questionsText: " Who said, \"100% of the shots you don't take don't go in\"?",
                anwserOptions:[
                    {anwserText: "Magic Johnson", isCorrect:false},
                    {anwserText: "Larry Bird", isCorrect:false},
                    {anwserText: "Michale Jordan", isCorrect:false},
                    {anwserText: "Wayne Gretzky", isCorrect:true},
                ],
            },
            
        {
            questionsText: "Who said, \"An eye for an eye only ends up making the whole world blind\"?",
                anwserOptions:[
                    {anwserText: "Mother Teresa", isCorrect:false},
                    {anwserText: "Malcom X", isCorrect:false},
                    {anwserText: "M.K Ghandi", isCorrect:true},
                    {anwserText: "Thomas Edison", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said, \"From there to here, and here to there, funny things are everywhere\"?",
                anwserOptions:[
                    {anwserText: "Bernie Mac", isCorrect:false},
                    {anwserText: "Kevin Hart", isCorrect:false},
                    {anwserText: "Dr.Suess", isCorrect:true},
                    {anwserText: "Jackie Chan", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said, \"A lie gets halfway around the world before the truth has a chance to get its pants on\"?",
                anwserOptions:[
                    {anwserText: "Kurt Cobain", isCorrect:false},
                    {anwserText: "Donald Trump", isCorrect:false},
                    {anwserText: "Albert Einstein", isCorrect:false},
                    {anwserText: "Winston Churchill", isCorrect:true},
                ],
            },
            {
                questionsText: "Who said, \"We didn't lose the game; we just ran out of time\"?",
                anwserOptions:[
                    {anwserText: "Marshawn Lynch", isCorrect:false},
                    {anwserText: "Brett Farve", isCorrect:false},
                    {anwserText: "Vince Lombardi", isCorrect:true},
                    {anwserText: "Aaron Rodgers", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said, \"Float like a butterfly; sting like a bee\"?",
                anwserOptions:[
                    {anwserText: "Ray Lewis", isCorrect:false},
                    {anwserText: "Mike Tyson", isCorrect:false},
                    {anwserText: "Joe Frazier", isCorrect:false},
                    {anwserText: "Muhammad Ali", isCorrect:true},
                ],
            },
            {
                questionsText: "Who said, \"We must learn to live together as brothers, or perish together as fools\"?",
                anwserOptions:[
                    {anwserText: "Martin Luther King Jr.", isCorrect:true},
                    {anwserText: "Cassius Clay", isCorrect:false},
                    {anwserText: "Al Sharpton", isCorrect:false},
                    {anwserText: "Fredick Douglass", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said, \"What does'nt kill you makes you stronger?",
                anwserOptions:[
                    {anwserText: "Fergi", isCorrect:false},
                    {anwserText: "Beyonce", isCorrect:false},
                    {anwserText: "Kelly Clarkson", isCorrect:true},
                    {anwserText: "Jennifer Lopez", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said \"Say hello to my little friend\"?",
                anwserOptions:[
                    {anwserText: "The Godfather", isCorrect:false},
                    {anwserText: "Scareface", isCorrect:true},
                    {anwserText: "Chris Tucker", isCorrect:false},
                    {anwserText: " Batman", isCorrect:false},
                ],
            },
            {
                questionsText: "What movie was the quote \"Wax on Wax off?\"?",
                anwserOptions:[
                    {anwserText: "Karate Kid", isCorrect:true},
                    {anwserText: "Fast and Furious", isCorrect:false},
                    {anwserText: "Friday", isCorrect:false},
                    {anwserText: " Kung Fu Panda", isCorrect:false},
                ],
            },
            {
                questionsText: "Who said \"You aint first your last\"? ",
                anwserOptions:[
                    {anwserText: "Usain Bolt", isCorrect:false},
                    {anwserText: "Donald Trump", isCorrect:false},
                    {anwserText: "Ricky Bobby", isCorrect:true},
                    {anwserText: "Carl Naughton Jr", isCorrect:false},
                ],
            },
            {
                questionsText: " What movie character in Sandlot said \"Your killing me smalls\"?",
                anwserOptions:[
                    {anwserText: "Scotty Smalls", isCorrect:false},
                    {anwserText: "Wendy", isCorrect:false},
                    {anwserText: "Philips", isCorrect:false},
                    {anwserText: "Ham Porter", isCorrect:true},
                ],
            },
            {
                questionsText: "What movie was the quote \"Its alive! Its alive!\"?",
                anwserOptions:[
                    {anwserText: "Frankenstein", isCorrect:true},
                    {anwserText: "Avatar", isCorrect:false},
                    {anwserText: "Avenger End Game", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Who Said That Quiz</p>
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
