import React from 'react'
import Typed from 'react-typed';

function Typer() {
    return(
    <div>
        <Typed
            strings={['Developer', 'Freelancer', 'Coder']}
            typeSpeed={40}
            backSpeed={50}
            loop='true'
        />
    </div>
    );
}

export default Typer
