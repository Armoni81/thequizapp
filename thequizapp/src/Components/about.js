import React from "react"
import itsME from "../images/IMG_8820.jpg"
import "../CSS/about.css"
import smiley from "../images/smiley-ge91982d24_640.png"
export default function About(){
    return(
        <div className = "background">
            <p>About</p>
            <div id = "header1">
                <img src = {itsME} id = "armoni"></img>
                <p id = "aboutme">Creator: Armoni Tigner</p>
                <p id = "aboutme">Built with React JSX CSS JavaScript </p>
                <p id = "aboutme">The Ultimate Quiz App was initially built to study basic software development topics, but later turned into hosting a plethora of catergories such as sports, movies, food and history. I did'nt want to limit myself. Please enjoy this app as it was built 100% from scratch. Please leave any reviews or messages in my contact form below.</p>
            </div>
            <div>
                <p id = "contact">Contact Me</p>
            </div>
            <div >
            <form action="https://submit-form.com/Rk6iiHfZ" className= "from">  
                    <label for="name">Name</label>
                    <input type="text" id= "name" name="name" placeholder=" Input Name" required="" />
                    <label for="email">Email</label>
                    <input type="email" id= "name" name="email" placeholder=" Input Email" required=""/>
                    <label for="message" >Message</label>
                <textarea
                id="message"
                name="message"
                placeholder="Message"
                required=""
                ></textarea>
            <button  id = "send"type="submit"> Send</button>
            </form>
            </div>
        </div>
    )
}