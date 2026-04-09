import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Chatbody from "./Components/Chatbody";

export default function App() {

  function userInput(message) {
    console.log(message);
  }


  
  return (
    <div className="chat-page">
      <div className="chat-widget">
        <Header />  
        <Chatbody />
        <Footer onSend={userInput}/>
      </div>
    </div>
  );
}
