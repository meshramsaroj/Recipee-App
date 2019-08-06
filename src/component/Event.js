import React, { } from 'react'
import Greet from './Greet';

const  Event =() => {
   function clickEvent(greetChild){
       console.log('button pressed')

       alert(`hello welcome to DTI  from ${greetChild}`)
   }
        return (
            <div>
                <h1>Hello </h1>
                <button onClick={clickEvent}>click event </button>
                <Greet  name="Saroj"  greetHandler={clickEvent} />
            </div>
        )
    }


export default Event
