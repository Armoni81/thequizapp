import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"

export default function History (){
        const questions1 = [
            {
                questionsText: "Juneteenth, which became an official federal holiday in 2021, commemorates...",
                anwserOptions:[
                    {anwserText: "The signing into law of the Civil Rights Act of 1964.", isCorrect:false},
                    {anwserText: "The U.S. Supreme Court ruling that effectively ended 'separate but equal' education.", isCorrect:false},
                    {anwserText: "The emancipation of enslaved African Americans in the U.S.", isCorrect:true},
                    {anwserText: "The service of black troops in the U.S. Army during the Civil War.", isCorrect:false},
                ],
            },
            
        {
            questionsText: "What group launched the Freedom Rides in 1961?",
                anwserOptions:[
                    {anwserText: "ACLU-American Civil Liberties Union", isCorrect:false},
                    {anwserText: "SCLC-Southern Christian Leadership Conference", isCorrect:false},
                    {anwserText: "CORE-Congress of Racial Equality", isCorrect:true},
                    {anwserText: "SNCC-Student Nonviolent Coordinating Committee", isCorrect:false},
                ],
            },
            {
                questionsText: "At the time of her historic bus incident, what was Rosa Parks' occupation?",
                anwserOptions:[
                    {anwserText: "Department store seamstress", isCorrect:true},
                    {anwserText: "High school cafeteria worker", isCorrect:false},
                    {anwserText: "Hospital orderly", isCorrect:false},
                    {anwserText: "Maid", isCorrect:false},
                ],
            },
            {
                questionsText: "Which of these influential authors became the first African American to win the Nobel Prize for Literature?",
                anwserOptions:[
                    {anwserText: "August Wilson", isCorrect:false},
                    {anwserText: "Lorraine Hansberry", isCorrect:false},
                    {anwserText: "Maya Angelou ", isCorrect:false},
                    {anwserText: "Toni Morrison", isCorrect:true},
                ],
            },
            {
                questionsText: "Before he was elected president of the United States, Barack Obama served as a U.S. senator of which state?",
                anwserOptions:[
                    {anwserText: "Bettles", isCorrect:false},
                    {anwserText: "Owls", isCorrect:false},
                    {anwserText: "Turtles", isCorrect:true},
                    {anwserText: "Snkaes", isCorrect:false},
                ],
            },
            {
                questionsText: "What U.S State is Jackie Robinson from",
                anwserOptions:[
                    {anwserText: "Iowa", isCorrect:false},
                    {anwserText: "Georgia", isCorrect:true},
                    {anwserText: "Indiana", isCorrect:false},
                    {anwserText: " Illinois", isCorrect:false},
                ],
            },
            {
                questionsText: "Rev. Jesse L. Jackson is known for his leadership roles with which civil rights organizations?",
                anwserOptions:[
                    {anwserText: "Southern Christian Leadership Conference", isCorrect:false},
                    {anwserText: "People United to Save Humanity (Operation PUSH)", isCorrect:false},
                    {anwserText: "Rainbow Coalition", isCorrect:false},
                    {anwserText: "All of the above", isCorrect:true},
                ],
            },
            {
                questionsText: "In 1968 she became the first African American woman elected to Congress?",
                anwserOptions:[
                    {anwserText: "Michelle Obama", isCorrect:false},
                    {anwserText: "Barbara Jordan", isCorrect:false},
                    {anwserText: "Shirley Chisholm", isCorrect:true},
                    {anwserText: "Maxine Waters ", isCorrect:false},
                ],
            },
            {
                questionsText: "Arthur Ashe was a famous ...?",
                anwserOptions:[
                    {anwserText: "Bowler", isCorrect:false},
                    {anwserText: "Baseball player", isCorrect:false},
                    {anwserText: "Tennis player", isCorrect:true},
                    {anwserText: " Basketball player", isCorrect:false},
                ],
            },
            {
                questionsText: "Charles Drew is responsible for which of the following?",
                anwserOptions:[
                    {anwserText: "Blood banks", isCorrect:true},
                    {anwserText: "Refridgerator", isCorrect:false},
                    {anwserText: "Sewing machine", isCorrect:false},
                    {anwserText: " Plastic surgery", isCorrect:false},
                ],
            },
            {
                questionsText: "He started the \"Back to Africa Movement\",and was later deported back to his homeland in Jamaica?",
                anwserOptions:[
                    {anwserText: "Fredick Douglass", isCorrect:false},
                    {anwserText: "Malcom X", isCorrect:false},
                    {anwserText: "Marcus Garvey ", isCorrect:true},
                    {anwserText: "Martin Luther King", isCorrect:false},
                ],
            },
            {
                questionsText: " Who holds the record of 100 points scored in a single NBA game?",
                anwserOptions:[
                    {anwserText: "Patrick Ewing", isCorrect:false},
                    {anwserText: "Bill Russle", isCorrect:false},
                    {anwserText: "Wilt Chamberlin", isCorrect:true},
                    {anwserText: "Michael Jordan", isCorrect:false},
                ],
            },
            {
                questionsText: "In what year did Harriet Tubman escape slavery?",
                anwserOptions:[
                    {anwserText: "1849", isCorrect:true},
                    {anwserText: "1792", isCorrect:false},
                    {anwserText: "1840", isCorrect:false},
                    {anwserText: "1802", isCorrect:false},
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
        <p id = "quizdisplay">Ultimate African-American History Quiz</p>
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
