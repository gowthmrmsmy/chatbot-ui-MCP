import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Chatbody from "./Components/Chatbody";

export default function App() {

  const botResponse = (message) => {
    return `Hello, how can I help you today? ${message}`;
  }



  
  return (
    <div className="chat-page">
      <div className="chat-widget">
        <Header />  
        <Chatbody botResponse={botResponse}/>
        <Footer />
      </div>
    </div>
  );
}
