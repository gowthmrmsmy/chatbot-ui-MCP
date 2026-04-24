import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Chatbody from "./Components/Chatbody";


export default function App() {


  const[messages,setMessages] = useState([]);
  
  useEffect(()=>{
  console.log(messages);
  },[messages]);

  const storeMessage=(message)=>{

    const text = message.trim()
    if(!text) return;

    const userMessage ={
      id: crypto.randomUUID(),
      role : 'user',
      message : text  
    }

    const systemMessage ={
      id: crypto.randomUUID(),
      role : 'system',
      message : `You said  ${text}`
    }

  //setMessages([...messages,message]);//
  setMessages((prev) =>[...prev, userMessage]);

  setTimeout(() => {
    setMessages((prev) =>[...prev, systemMessage]);
  }, 800);
  }

  
  
  return (
    <div className="chat-page">
      <div className="chat-widget">
        <Header />  
        <Chatbody messages={messages}/>
        <Footer onSend={storeMessage}/>
        
      </div>
    </div>
  );
}
