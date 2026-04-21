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
      id: Date.now(),
      role : 'user',
      message : text  
    }

    const systemMessage ={
      id: Date.now(),
      role : 'system',
      message : `You said  ${text}`
    }

  //setMessages([...messages,message]);//
  setMessages((prev) =>[...prev, userMessage, systemMessage]);
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
