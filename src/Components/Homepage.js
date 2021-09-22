import React from 'react'
import PassportImage from './PassportImage'
import Typer from '../Typer';

function Homepage() {
    return (
        <div>
            <PassportImage/>
            <div class="home_text">
                <h5 class = "my-1">Hi, I am</h5>
                <h2 >Gaurav Thakur</h2>
                <h5>and I am a <span className="typing"></span></h5>
                <h2><Typer/></h2>
            </div>
        </div>
    )
}

export default Homepage
