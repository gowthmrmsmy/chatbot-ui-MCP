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

  //setMessages([...messages,message]);//
  setMessages((prev) =>[...prev, message]);
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
