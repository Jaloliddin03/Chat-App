import { useState } from "react";
import ChatAlex from "./Components/ChatAlex/ChatAlex";
import ChatEvg from "./Components/ChatEvg/ChatEvg";
import ChatModalAlex from "./Components/ChatModalAlex/ChatModalAlex";
import ChatModalEvg from "./Components/ChatModalEvg/ChatModalEvg";


function App() {
  const [messages, setMessages] = useState([])
  const [openModalAlex, setOpenModalAlex] = useState(false)
  const [openModalEvg, setOpenModalEvg] = useState(false)

  const handleOpenModalAlex = () => {
    setOpenModalAlex(true)
  }
  const handleOpenModalEvg = () => {
    setOpenModalEvg(true)
  }
  
  return (
    <div className="App">
      <div className="chats container">
        <ChatAlex
          messages={messages}
          setMessages={setMessages}
          openModal={openModalAlex}
          handleOpenModal={handleOpenModalAlex}
        />
        <ChatEvg
          messages={messages}
          setMessages={setMessages}
          openModal={openModalEvg}
          handleOpenModal={handleOpenModalEvg}
        />
        <ChatModalAlex
          messages={messages}
          setMessages={setMessages}
          openModal={openModalAlex}
          handleOpenModal={handleOpenModalAlex}
          setOpenModal={setOpenModalAlex}
        />
        <ChatModalEvg
          messages={messages}
          setMessages={setMessages}
          openModal={openModalEvg}
          handleOpenModal={handleOpenModalEvg}
          setOpenModal={setOpenModalEvg}
        />

      </div>
    </div>
  );
}

export default App;
