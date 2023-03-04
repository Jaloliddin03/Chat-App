import React from 'react'
import './ChatAccept.scss'

const ChatAccept = ({ messages }) => {

    return (
        <div className='out'>
        {
            messages.img ? <div className="img__items-2">
                <div className="img__content-2">
                    <img src={messages.urlValue} alt="" className="img-2" />
                    <p className="img__coment-2">{messages.comment}</p>
                </div>
                <span className="img__time-2">{messages.time}</span>
            </div>
            : <div className="message__content-2">
                
                <p className="message__text-2">{messages.value}</p>
                <span className='message__time-2'>{messages.time}</span>
            </div>
        }
        </div>
    )
}

export default ChatAccept