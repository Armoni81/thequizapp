import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function Questions (){
        const questions1 = [
            {
                questionsText: "Choose the correct HTML element for the largest heading?",
                anwserOptions:[
                    {anwserText: "<h1>", isCorrect:true},
                    {anwserText: "<h6>", isCorrect:false},
                    {anwserText: "<heading>", isCorrect:false},
                    {anwserText: "<body>", isCorrect:false},
                ],
            },
            
        {
            questionsText: "How can you make a numbered list?",
                anwserOptions:[
                    {anwserText: "<ul>", isCorrect:false},
                    {anwserText: "<li>", isCorrect:false},
                    {anwserText: "<ol>", isCorrect:true},
                    {anwserText: "<list>", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the default local host port that a React development server uses?",
                anwserOptions:[
                    {anwserText: "3000", isCorrect:true},
                    {anwserText: "5000", isCorrect:false},
                    {anwserText: "7000", isCorrect:false},
                    {anwserText: "3500", isCorrect:false},
                ],
            },
            {
                questionsText: "What does CSS stand for?",
                anwserOptions:[
                    {anwserText: "Casscading Style Sheet", isCorrect:true},
                    {anwserText: "Casscasing Sheet Style", isCorrect:false},
                    {anwserText: "Computer Sheet Style", isCorrect:false},
                    {anwserText: "Customizeable Style Sheet", isCorrect:false},
                ],
            },
            {
                questionsText: "Which is the correct syntax for importing React?",
                anwserOptions:[
                    {anwserText: "import \"react\" from React", isCorrect:false},
                    {anwserText: "import react from React", isCorrect:false},
                    {anwserText: "import React from \"react\"", isCorrect:true},
                    {anwserText: "import React from react", isCorrect:false},
                ],
            },
            {
                questionsText: "How do you start a react app ?",
                anwserOptions:[
                    {anwserText: "npx start-react-app", isCorrect:false},
                    {anwserText: "npm start-react-app", isCorrect:false},
                    {anwserText: "npx start", isCorrect:false},
                    {anwserText: " npm start", isCorrect:true},
                ],
            },
            {
                questionsText: "Inside which HTML element do we put the JavaScript?",
                anwserOptions:[
                    {anwserText: "<script>", isCorrect:true},
                    {anwserText: "<js>", isCorrect:false},
                    {anwserText: "<body>", isCorrect:false},
                    {anwserText: "<javascript> ", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of the following type of variable is visible everywhere in your JavaScript code?",
                anwserOptions:[
                    {anwserText: "All Variables", isCorrect:false},
                    {anwserText: "Local Variable", isCorrect:false},
                    {anwserText: "Global Variable", isCorrect:true},
                    {anwserText: "Wide Variable ", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
                anwserOptions:[
                    {anwserText: "slice()", isCorrect:false},
                    {anwserText: "substr()", isCorrect:false},
                    {anwserText: "substring()", isCorrect:true},
                    {anwserText: " split()", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of the following function of Array object calls a function for each element in the array?",
                anwserOptions:[
                    {anwserText: "forEach()", isCorrect:true},
                    {anwserText: "concat()", isCorrect:false},
                    {anwserText: "every()", isCorrect:false},
                    {anwserText: " filter()", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the correct HTML for referring to an external style sheet?",
                anwserOptions:[
                    {anwserText: "<stylesheet>styles.css</stylesheet>", isCorrect:false},
                    {anwserText: "<link rel = \"stylesheet \" type = \"text/css\" ref= \"styles.css\">", isCorrect:false},
                    {anwserText: "<link rel = \"stylesheet \" type = \"text/css\" href= \"styles.css\">", isCorrect:true},
                    {anwserText: "None of the above :smiling_imp:", isCorrect:false},
                ],
            },
            {
                questionsText: "What is the correct CSS Syntax?",
                anwserOptions:[
                    {anwserText: "{body:color=black;}", isCorrect:false},
                    {anwserText: "body:color=black; ", isCorrect:false},
                    {anwserText: "body {color: black;}  ", isCorrect:true},
                    {anwserText: "{body;color:black;} ", isCorrect:false},
                ],
            },
            {
                questionsText: "How do you insert a comment in a CSS file?",
                anwserOptions:[
                    {anwserText: "/* this is a comment */  ", isCorrect:true},
                    {anwserText: "' this is a comment ", isCorrect:false},
                    {anwserText: "/ this is a comment /", isCorrect:false},
                    {anwserText: "// this is a comment ", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate Coder Quiz</p>
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
