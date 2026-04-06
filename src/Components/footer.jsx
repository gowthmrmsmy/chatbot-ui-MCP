import "../App.css";

export default function Footer() {

    return(
        <div class="footer-container">
        <div className="chat-composer">
            <input
              type="text"
              readOnly
              placeholder="Type a message (wire this up)"
              className="chat-input"
              aria-label="Message input"
            />
            <button type="button" className="chat-send">
              Send
            </button>
          </div>
          </div>
    )
}


