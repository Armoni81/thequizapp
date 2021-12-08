import React from "react"
import logo from "../images/925808_wifi_icon.png"
import "../CSS/questions.css"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import brain from "../images/brains-home-page.png"






export default function SportQuestions (){
        const questions1 = [
            {
                questionsText: "Who has the most Championship Rings in NBA History?",
                anwserOptions:[
                    {anwserText: "Bill Russell", isCorrect:true},
                    {anwserText: "Lebron James", isCorrect:false},
                    {anwserText: "Michael Jordan", isCorrect:false},
                    {anwserText: "Steve Nash", isCorrect:false},
                ],
            },
            
        {
            questionsText: "Who won the 2021 MLB World Series?",
                anwserOptions:[
                    {anwserText: "Atlanta Braves", isCorrect:true},
                    {anwserText: "Houston Astros", isCorrect:false},
                    {anwserText: "Los Angeles Dodgers", isCorrect:false},
                    {anwserText: "San Franciso Giants", isCorrect:false},
                ],
            },
            {
                questionsText: "What sport is referred to as \"Americas past time\"?",
                anwserOptions:[
                    {anwserText: "Tennis", isCorrect:false},
                    {anwserText: "Golf", isCorrect:false},
                    {anwserText: "Baseball", isCorrect:true},
                    {anwserText: "Football", isCorrect:false},
                ],
            },
            {
                questionsText: "The olympics are held once every ________ ",
                anwserOptions:[
                    {anwserText: "3 years", isCorrect:false},
                    {anwserText: "4 years", isCorrect:true},
                    {anwserText: "8 years", isCorrect:false},
                    {anwserText: "6 years", isCorrect:false},
                ],
            },
            {
                questionsText: "How old was Tiger Woods when he won his first Masters ?",
                anwserOptions:[
                    {anwserText: "22 years old", isCorrect:false},
                    {anwserText: "19 years old", isCorrect:false},
                    {anwserText: "24 years old", isCorrect:false},
                    {anwserText: " 21 years old", isCorrect:true},
                ],
            },
            {
                questionsText: "What NFL team won 3 superbowls in the 90s?",
                anwserOptions:[
                    {anwserText: "Pittsburg Steelers", isCorrect:false},
                    {anwserText: "Dallas Cowboys", isCorrect:true},
                    {anwserText: "Buffalo Bills", isCorrect:false},
                    {anwserText: "Green Bay Packers ", isCorrect:false},
                ],
            },
            {
                questionsText: "Who was the First NBA player to test positive for COVID-19?",
                anwserOptions:[
                    {anwserText: "Kyrie Irving", isCorrect:false},
                    {anwserText: "Donovan Mitchell", isCorrect:false},
                    {anwserText: "Rudy Gobert", isCorrect:true},
                    {anwserText: "Kevin Durant", isCorrect:false},
                ],
            },
            {
                questionsText: "What retired basketball players tried out for the Chicago White Sox in 1994?",
                anwserOptions:[
                    {anwserText: "B. J. Armstrong", isCorrect:false},
                    {anwserText: "Horace Grant", isCorrect:false},
                    {anwserText: "Michale Jordan", isCorrect:true},
                    {anwserText: "Mark Price ", isCorrect:false},
                ],
            },
            {
                questionsText: "What is a soccer field called?",
                anwserOptions:[
                    {anwserText: "A soccer field", isCorrect:false},
                    {anwserText: "A pitch", isCorrect:true},
                    {anwserText: "The green", isCorrect:false},
                    {anwserText: " None of the above", isCorrect:false},
                ],
            },
            {
                questionsText: "What do the letters BMX stand for?",
                anwserOptions:[
                    {anwserText: "Bicycle Motorcross", isCorrect:true},
                    {anwserText: "Bicycle Motor X", isCorrect:false},
                    {anwserText: "Bicycle Motors Xtreme", isCorrect:false},
                    {anwserText: "None of the above", isCorrect:false},
                ],
            },
            {
                questionsText: "What pitcher holds the record for most complete games in an MLB career?",
                anwserOptions:[
                    {anwserText: "Marion Rivera", isCorrect:false},
                    {anwserText: "Don Sutton", isCorrect:false},
                    {anwserText: "Cy Young", isCorrect:true},
                    {anwserText: "Roy Halladay", isCorrect:false},
                ],
            },
            {
                questionsText: "Who is the most decorated Olympian of all time??",
                anwserOptions:[
                    {anwserText: "Paavo Numi", isCorrect:false},
                    {anwserText: "Carl Lewis ", isCorrect:false},
                    {anwserText: "Michale Phelps ", isCorrect:true},
                    {anwserText: "Usain Bolt", isCorrect:false},
                ],
            },
            {
                questionsText: "What college football position receives the Jim Thorpe Award?",
                anwserOptions:[
                    {anwserText: "Cornerback ", isCorrect:true},
                    {anwserText: "Tight End", isCorrect:false},
                    {anwserText: "Linebacker", isCorrect:false},
                    {anwserText: "Quaterback ", isCorrect:false},
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
            <p id = "quizdisplay">Ultimate Sports Quiz</p>
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
    