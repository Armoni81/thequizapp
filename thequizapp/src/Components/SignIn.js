import React from "react"
import {authentication} from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import logo from "../images/quiz.png"
import "../CSS/signin.css"
import { getAuth, signOut } from "firebase/auth"; 

export default function SignIn (){
   
   

        const signInWithGoogle =  ()=>{
          if(authentication === true){
            alert("You have signed in")
          }
          const provider = new GoogleAuthProvider()
          signInWithPopup(authentication, provider)
          .then((re) =>{
            console.log(re)
            alert("You have signed in! LETS QUIZ!")
          })
          .catch((err) =>{
            console.log(err)
            alert("Please try again")
          })
          
          

        }
        
        return (
          <p id = "quizdisplay2">Sign-In
          <body className="Container-signin">
            
            <div className = "sign-in-cont">
              
              <div id = "logo">
                
               <p id = "quiz-name">Ultimate-Quiz</p>
              </div>
              <div>
                <button onClick={signInWithGoogle} id = "bbutton-signin"> </button>
              </div>
              <div>
                <h6 id= "builtby">Built by Armoni Tigner</h6>
               
              </div>
            </div>
          </body>
        </p>
        );
      }
      
      
    
