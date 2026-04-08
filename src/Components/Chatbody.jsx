import "../App.css";
import Message from "./message";
import Quickreply from "./Quickreply";


export default function Chatbody({botResponse}) {


    return(
        <div className='chat-body'>
            <Message botResponse={botResponse}/>
            <Quickreply />

        </div>
    )
}