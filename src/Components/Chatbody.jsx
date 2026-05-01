import "../App.css";
import { useRef } from "react";
import { useEffect } from "react";
import Quickreply from "./Quickreply";




export default function Chatbody({messages, onSelect}) {

    const boxRef = useRef(null);

    useEffect(()=>{
        if(!boxRef.current) return;
        boxRef.current.scrollTop = boxRef.current.scrollHeight;
    },[messages]);

    const renderMessage = (msg)=>{
        if(msg.role==='user'){
            return(
                <div className='chat-msg-block chat-msg-block-user'>
                    <div className='chat-bubble-user'>{msg.message}</div>
                    
                </div>
            )
        }
        else if(msg.role==='system'){
            return(
                <div className='chat-msg-block chat-msg-block-system'>
                    <div className='chat-bubble-system'>{msg.message}</div>
                    <Quickreply quickreplies={msg.quickreplies} onSelect={onSelect}/>
                </div>
            )
        }
    }
    

    
    return( 
        <div className='chat-body' ref={boxRef}>
           
        {messages.map((msg) => (
            /*<div key={msg.id} className="chat-msg-block">
                {msg.role === "user" ? (
                    <div className="chat-bubble-user">{msg.message}</div>
                ) : (
                    <div className="chat-bubble-sy  stem">{msg.message}</div>
                )}
            </div>*/
            <div key={msg.id}> 
            
            {renderMessage(msg)}
            </div>
            
        ))}

        
        </div>
    )
}