import React from 'react'


const Hello =() =>{
    // with JSX
    return (
        <div>
            <h1>Hello <span> welcom to DTI</span> </h1>
        </div>
    )


    // without JSX
    // return React.createElement(
    //     'div',
    //     null,
    //     'hello')
}

export default Hello