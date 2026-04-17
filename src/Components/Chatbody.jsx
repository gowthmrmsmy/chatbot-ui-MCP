import "../App.css";
import Message from "./message";
import Quickreply from "./Quickreply";
import { useState } from "react";


export default function Chatbody({messages}) {

    


    return( 
        <div className='chat-body'>
            {messages.map((msg,index) => (
                <div key={index} className='chat-msg-block'>
                    {msg}
                </div>
            ))}
           
            <Quickreply />

        </div>
    )
}