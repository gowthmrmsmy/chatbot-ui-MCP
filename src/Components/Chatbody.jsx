import "../App.css";
import Quickreply from "./Quickreply";



export default function Chatbody({messages}) {
   
    const renderMessage = (msg)=>{
        if(msg.role==='user'){
            return(
                <div className='chat-msg-block'>
                    <div className='chat-bubble-user'>{msg.message}</div>
                </div>
            )
        }
        else if(msg.role==='system'){
            return(
                <div className='chat-msg-block'>
                    <div className='chat-bubble-system'>{msg.message}</div>
                </div>
            )
        }
    }
    

    
    return( 
        <div className='chat-body'>
           
        {messages.map((msg) => (
            /*<div key={msg.id} className="chat-msg-block">
                {msg.role === "user" ? (
                    <div className="chat-bubble-user">{msg.message}</div>
                ) : (
                    <div className="chat-bubble-system">{msg.message}</div>
                )}
            </div>*/
            renderMessage(msg)
        ))}
        
               
                
         
            <Quickreply />

        </div>
    )
}