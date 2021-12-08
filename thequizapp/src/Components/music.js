import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Music (){
        const questions1 = [
            {
                questionsText: "What singer has had a Billboard No. 1 hit in each of the last four decades?",
                anwserOptions:[
                    {anwserText: "Brittney Spears", isCorrect:false},
                    {anwserText: "Beyonce", isCorrect:false},
                    {anwserText: "Mariah Carey", isCorrect:true},
                    {anwserText: "Fantasia", isCorrect:false},
                ],
            },
            
        {
            questionsText: "Who was the very first American Idol winner?",
                anwserOptions:[
                    {anwserText: "Fantasia", isCorrect:false},
                    {anwserText: "Carrie Underwood", isCorrect:false},
                    {anwserText: "Kelly Clarkson", isCorrect:true},
                    {anwserText: "Jordin Sparks", isCorrect:false},
                ],
            },
            {
                questionsText: "Which member of NSYNC was a replacement for another who quit before they got big?",
                anwserOptions:[
                    {anwserText: "JC Chasez", isCorrect:false},
                    {anwserText: "Joey Fatone", isCorrect:false},
                    {anwserText: "Lance Bass", isCorrect:true},
                    {anwserText: "Justin Timeberlake", isCorrect:false},
                ],
            },
            {
                questionsText: "What singer is known as the \"The Vocal Bible\"?",
                anwserOptions:[
                    {anwserText: "Tina Turner", isCorrect:false},
                    {anwserText: "Whitney Houston", isCorrect:false},
                    {anwserText: "Diana Ross", isCorrect:false},
                    {anwserText: "Brandy", isCorrect:true},
                ],
            },
            {
                questionsText: "Where was Tupac Shakur born?",
                anwserOptions:[
                    {anwserText: "East Harmlem, New York", isCorrect:true},
                    {anwserText: "North Harmlem, New York", isCorrect:false},
                    {anwserText: "Boston, Massachusetts", isCorrect:false},
                    {anwserText: "Staten Island, New York", isCorrect:false},
                ],
            },
            {
                questionsText: " Cardi B starred on what reality show?",
                anwserOptions:[
                    {anwserText: "The real Housewives of New York", isCorrect:false},
                    {anwserText: "Too Hot To Handle", isCorrect:false},
                    {anwserText: "Flava of Love", isCorrect:false},
                    {anwserText: " Love & Hip Hop", isCorrect:true},
                ],
            },
            {
                questionsText: "What female rapper calls her fans \"hotties\"?",
                anwserOptions:[
                    {anwserText: "Nicki Minaj", isCorrect:false},
                    {anwserText: "Cardi B", isCorrect:false},
                    {anwserText: "Miss Mulatto", isCorrect:false},
                    {anwserText: "Megan thee Stallion", isCorrect:true},
                ],
            },
            {
                questionsText: "The “J” in Mary J. Blige stands for what?",
                anwserOptions:[
                    {anwserText: "Jade", isCorrect:false},
                    {anwserText: "Jackson", isCorrect:false},
                    {anwserText: "Jane", isCorrect:true},
                    {anwserText: "Jamela ", isCorrect:false},
                ],
            },
            {
                questionsText: "Which Britney Spears songs have hit No. 1??",
                anwserOptions:[
                    {anwserText: "Vision of love and Honey", isCorrect:false},
                    {anwserText: "Love take time and Hero", isCorrect:false},
                    {anwserText: "Baby One More Time and Womanizer", isCorrect:true},
                    {anwserText: " Always be my baby and Dreamover", isCorrect:false},
                ],
            },
            {
                questionsText: "The Rock and Roll Hall of Fame is situated in what US State?",
                anwserOptions:[
                    {anwserText: "Ohio", isCorrect:true},
                    {anwserText: "Indiana", isCorrect:false},
                    {anwserText: "Neveda", isCorrect:false},
                    {anwserText: "Texas", isCorrect:false},
                ],
            },
            {
                questionsText: "Where is Kanye West from",
                anwserOptions:[
                    {anwserText: "Los Angeles, California", isCorrect:false},
                    {anwserText: "Atlanta, Georgia", isCorrect:false},
                    {anwserText: "Chicago, Illinois", isCorrect:true},
                    {anwserText: "Harlem, New York", isCorrect:false},
                ],
            },
            {
                questionsText: " Who raps on Usher’s “Yeah”?",
                anwserOptions:[
                    {anwserText: "Jay-Z", isCorrect:false},
                    {anwserText: "T-Pain", isCorrect:false},
                    {anwserText: "Ludacris", isCorrect:true},
                    {anwserText: "The Dream", isCorrect:false},
                ],
            },
            {
                questionsText: "WHich rapper has 99 problems?",
                anwserOptions:[
                    {anwserText: "Jay-Z", isCorrect:true},
                    {anwserText: "Lil Wayne", isCorrect:false},
                    {anwserText: "E-40", isCorrect:false},
                    {anwserText: "Biggie Smalls", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Music Quiz</p>
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
