import React from "react"
import "../CSS/home.css"
import Questions from "./Questions"
import SportQuestions from "./SportQuestions"
import brain from "../images/brains-home-page.png"

export default function Home(){


    
    return(
        <div className= "home-cont">
            <div className= "quiz-home-half">
                <p id = "quizword-home"> The Ultimate Quiz App</p>
                
            </div>
            <div>
                <p id = "playnow">Play Now!</p>
            </div>
            <div className = "seperate-quizzes">
                <li id = "quizbox1"><a href = "/questions" id = "href1" >Ultimate Coder Quiz</a></li>
                <li id = "quizbox2" ><a href = "/sportquestions" id = "href1">Ultimate Sports Quiz </a></li>
                <li id = "quizbox3"><a href = "/movies" id = "href1"> Ultimate Movies Quiz</a></li>
                <li id = "quizbox4"><a href = "/COR" id = "href2"> Ultimate City of Refuge Quiz</a></li>
                <li id = "quizbox5"><a href = "/food" id = "href1">Ultimate Food Quiz</a></li>
                <li id = "quizbox6"><a href = "/animals" id = "href1">Ultimate Animals Quiz</a></li> 
                <li id = "quizbox7"><a href = "/amHistory" id = "href3">Ultimate African-American History Quiz</a></li>
                <li id = "quizbox8"><a href = "/geography" id = "href1">Ultimate Geography Quiz</a></li> 
                <li id = "quizbox9"><a href = "/whosaidthat" id = "href2">Ultimate Who said that Quiz</a></li>
                <li id = "quizbox10"><a href = "/music" id = "href1">Ultimate Music Quiz</a></li> 
                <li id = "quizbox11"><a href = "/spongebob" id = "href1">Ultimate Spongebob Quiz</a></li>
                <li id = "quizbox12"><a href = "/general" id = "href3">Are you smarter than a 5th grader Quiz</a></li>  
                 
                       
            </div>
        </div>
    )
}