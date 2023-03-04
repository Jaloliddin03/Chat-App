import React, { useState } from 'react'


import './ChatModalAlex.scss'

const ChatModalAlex = ({ openModal, setOpenModal, messages, setMessages,type }) => {
    const [comment, setComment] = useState('')
    const [urlValue, setUrlValue] = useState('')

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const onChangeInput = (e) => {
        setComment(e.target.value)
    }

    const onChangeUrlInput = (e) => {
        setUrlValue(e.target.value)
    }

    const addImages = (e) => {
        e.preventDefault()

        const newImagesAlex = {
            id: Math.random().toString(36).substring(2, 9),
            type: 1,
            comment,
            urlValue,
            img: true,
            pose: 'right',
            time: `${new Date().getHours()}:${new Date().getMinutes()}`
        }
        setComment('')
        setUrlValue('')
        setMessages([...messages, newImagesAlex])
        setOpenModal(false)
    }


    return (
        <div className={openModal ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <h2 className="modal__title">Отправить картинку</h2>
                <form action="" className="modal__form">
                    <div className="modal__group">
                        <input type="text" value={urlValue} onChange={onChangeUrlInput} required />
                        <span></span>
                        <label>Url</label>
                    </div>
                    <div className="modal__group">
                        <input type="text" value={comment} onChange={onChangeInput} required />
                        <span></span>
                        <label>Коментари</label>
                    </div>
                    <div className="modal__btns">
                        <button onClick={handleCloseModal}>Отмена</button>
                        <button onClick={addImages}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}




export default ChatModalAlex