import React from 'react'
import './ChatSend.scss'

const ChatSend = ({ messages }) => {


    return (
        <div className='send'>
        {
            messages.img ? <div className="img__items">
                  <span className="img__time">{messages.time}</span>
                <div className="img__content">
                    <img src={messages.urlValue} alt="" className="img" />
                    <p className="img__coment">{messages.comment}</p>
                </div>
              
            </div>
            : <div className="message__content">
                <span className='message__time'>{messages.time}</span>
                <p className="message__text">{messages.value}</p>
                
            </div>
        }
        </div>
    )
}

export default ChatSend