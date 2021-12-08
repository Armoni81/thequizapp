

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Components/SignIn'
import Questions from "./Components/Questions"
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import SportQuestions from "./Components/SportQuestions";
import About from "./Components/about";
import COR from "./Components/COR";
import Food from "./Components/food";
import Animals from "./Components/animals";
import Example from "./Components/deleteme";
import History from "./Components/Amhistory";
import brain from "./images/brains-home-page.png"
import Geography from "./Components/geography";
import whoSaidThat from "./Components/whosaidthat";
import "./App.css"
import Whosaidthat from "./Components/whosaidthat";
import Music from "./Components/music";
import Spongebob from "./Components/spongebob";
import General from "./Components/general";





    export default function App() {
      return (
        <Router>
            <nav>
              <div className = "navbar">
                <p id= "quiz-name">Ultimate-Quiz</p> 
                <ul className= "navbar-list">
                    <li><a href="/" id = "navhover">Home</a></li>
                    <li><a href="/signin" id = "navhover">Sign-In</a></li>
                    <li><a href="/about" id = "navhover">About</a></li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route path="/signin" element = {<SignIn/>} />
              <Route path="/questions" element = {<Questions/>}/>
              <Route path="/" element = {<Home/>}/>
              <Route path="/sportquestions" element = {<SportQuestions/>}/>
              <Route path="/movies" element = {<Movies/>}/>
              <Route path="/cor" element = {<COR/>}/>
              <Route path="/food" element = {<Food/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/animals" element = {<Animals/>}/>
              <Route path="/amHistory" element = {<History/>}/>
              <Route path="/geography" element = {<Geography/>}/>
              <Route path="/whosaidthat" element = {<Whosaidthat/>}/>
              <Route path="/music" element = {<Music/>}/>
              <Route path="/spongebob" element = {<Spongebob/>}/>
              <Route path="/general" element = {<General/>}/>


 


            
            </Routes>
          
        </Router>
      );
    }


