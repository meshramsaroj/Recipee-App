import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)




    return (
        <div>
            <div><h3>count {count} </h3></div>
            <button onClick={() => setCount(count+1)}>
                press button
               </button>
        </div>
    )

}




export default Count