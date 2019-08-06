import React from 'react'
import '../css/State.css'

// function Greet(){
//     return  <h1>Hello Saroj</h1>
// }

const Greet = ({name,greetHandler}) => {
    console.log(name)
    // const [isGreet, setisGreet] = useState(false)
    return (
        <div>
            <h1>Hello {name}</h1>

            <button onClick={()=> greetHandler('child greet')}> click 2</button>

        </div>


    )

}


export default Greet