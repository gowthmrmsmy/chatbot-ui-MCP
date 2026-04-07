import "./App.css";
import Message from "./Components/message";
import Quickreply from "./Components/Quickreply";
import Footer from "./Components/footer";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="chat-page">
      <div className="chat-widget">
        <Header />
        <Message />
        <Quickreply />
        <Footer />
      </div>
    </div>
  );
}
