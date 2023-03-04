import React, { useState } from 'react'
import './ChatAlex.scss'
import AlexAva from '../../Assets/images/AlexAva.png'
import SvgIcons from '../../Assets/Icons/SvgIcons'
import ChatAccept from '../ChatAccept/ChatAccept'
import ChatSend from '../ChatSend/ChatSend'



const ChatAlex = ({
  messages,
  setMessages,
  openModal,
  handleOpenModal}) => {
  const [value, setValue] = useState('')

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  const addMessages = (e) => {
    e.preventDefault()

    const newMessages  = {
      id:  Math.random().toString(36).substring(2, 9),
      type: 1,
      value,
      time:`${new Date().getHours()}:${new Date().getMinutes()}`
    }
    setValue('')
    setMessages([...messages, newMessages])
  }

  return (
    <>
      <div className='alex '>
        <div className="header">
          <img src={AlexAva} alt="ava" className="header__ava" />
          <div className="header__titles">
            <h2 className="header__title">Александр</h2>
            <p className="header__text">Онлайн</p>
          </div>
        </div>
        <div className="main">
        {
          messages.map(item => item.type === 1 ? 
            <ChatSend key={item.id} messages={item}/>
            :
            <ChatAccept key={item.id} messages={item}/>
            )
        }

        </div>
        <div className="footer">
          <input type="text"
            value={value}
            onChange={onChangeInput}
            className="footer__input"
            placeholder='Написать сообщение...'
          />
          {
            value ? <span onClick={addMessages}>
                       <SvgIcons id={'send'} />
                    </span>
                  : <span onClick={handleOpenModal}>
                       <SvgIcons id={'camera'} />
                   </span>
          }
        </div>
      </div>
    </>
  )
}

export default ChatAlex
