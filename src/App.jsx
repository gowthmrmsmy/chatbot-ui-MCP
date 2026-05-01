import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Chatbody from "./Components/Chatbody";



export default function App() {


  const flow = {
    start:{
      text:"Hello, how can I help you today?",
      quickReplies:[
        {label:"New connection", value:"new_connection", next:"new_connection"},
        {label:"Manage Plan", value:"manage_plan", next:"manage_plan"},
        {label:"Support", value:"support", next:"support"},
      ]
    },
    new_connection:{
      text:"Got it I’ll show you available plans for a new connection.",
      quickReplies:[
        {label:"View Plans", value:"view_plans", next:"view_plans"},
        {label:"I need help choosing", value:"help_choosing_plan", next:"help_choosing_plan"},
      ]
    },
    view_plans:{
      text:"Showing plans for new connection",
    },
   help_choosing_plan:{
    text:"No worries  Our team can help you choose the right plan for your needs.",
    quickReplies:[
      {label:"call us", value:"call_us", next:"call_us"},
      {label:"Request a callback", value:"request_callback", next:"request_callback"},
      {label:"Talk to live agent", value:"talk_to_live_agent", next:"talk_to_live_agent"},
    ]
  },
  manage_plan:{
    text:"Sure, What would you like to do?",
    quickReplies:[
      {label:"View current plan", value:"view_current_plan", next:"view_current_plan"},
      {label:"Upgrade plan", value:"upgrade_plan", next:"upgrade_plan"},
      {label:"Downgrade plan", value:"downgrade_plan", next:"downgrade_plan"},
    ]
  },
  view_current_plan:{
    text:"To view your current plan details, please log in to your account.",
    quickReplies:[
      {label:"Go to login", value:"go_to_login", next:"go_to_login"},
      {label:"Support", value:"support", next:"support"},
    ]
  },
  upgrade_plan:{
    text:"Got it  I’ll show you upgrade options for your current plan.",
    quickReplies:[
      {label:"Go to login", value:"go_to_login", next:"go_to_login"},
      {label:"Support", value:"support", next:"support"},
    ]
  },
  support:{
    text:"How would you like to get support?",
    quickReplies:[
      {label:"Call us", value:"call_us", next:"call_us"},
      {label:"Request a callback", value:"request_callback", next:"request_callback"},
      {label:"Talk to live agent", value:"talk_to_live_agent", next:"talk_to_live_agent"},
    ]
  }
};


  const [messages,setMessages] = useState([]);
  
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
      message : `You said  ${text}`,
      quickreplies : flow.start.quickReplies,
      message : flow.start.text
    };

  //setMessages([...messages,message]);//
  setMessages((prev) =>[...prev, userMessage]);
  setTimeout(() => {    
    setMessages((prev) =>[...prev, systemMessage]);
  }, 800);
  }

  const onQuickReply = (reply) =>{
    const nextStep = flow[reply.next];
    if (!nextStep) return;
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      message: reply.label,
    };
    const systemMessage = {
      id: crypto.randomUUID(),
      role: "system",
      message: nextStep.text,
      quickreplies: nextStep.quickReplies ?? [],
    };
    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => {
      setMessages((prev) => [...prev, systemMessage]);
    }, 400);
  };

  return (
    <div className="chat-page">
      <div className="chat-widget">
        <Header />  
        <Chatbody messages={messages}  onSelect ={onQuickReply}/>
        <Footer onSend={storeMessage}/>
        
      </div>
    </div>
  );
}
