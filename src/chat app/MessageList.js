import React, { Component } from 'react'


const messageData =[
    {
        senderId : 'Saroj',
        text : 'Hey , How is it  '
    },
    {
        senderId : 'Shruti',
        text : 'great ! How about you? '
    },
    {
        senderId : 'Sana',
        text : 'Good to hear '
    }
]


const MessageList =() => {

        return (
            <div className="message-list">
                {messageData.map((message, index ) => {
                    return (
                        <div key={index} >
                            <div>{message.senderId}</div>
                           <div> {message.text}</div>

                        </div>

                    )

                })}
            </div>
        )

}

export default MessageList
