/**
 * Chatbot UI — starter structure only.
 * One component on purpose: easy to read top-to-bottom while you learn React + JSX.
 *
 * Layout lives in App.css (plain CSS class names below).
 */

import "./App.css";

export default function App() {
  // No state yet. You’ll add useState when you need typing, messages, or open/close.

  return (
    <div className="chat-page">
      {/* Shell: fixed-width column = the “widget” on the page */}
      <div className="chat-widget">
        {/* --- Header: branding + dismiss --- */}
        {/* TODO: replace placeholders with real logo/title; hook up close (e.g. lift widget visibility to state). */}
        <header className="chat-header">
          <div className="chat-logo-placeholder" aria-hidden />
          <button type="button">[close]</button>
        </header>

        {/* --- Message list: scrolls when content grows --- */}
        {/* TODO: map over a messages array instead of hard-coded blocks; style bubbles per role (user vs bot). */}
        <main className="chat-messages">
          <section className="chat-msg-block">
            <p className="chat-msg-meta">[assistant placeholder]</p>
            <div className="chat-bubble-placeholder">
              Short intro / question text goes here.
            </div>
          </section>

          {/* Quick replies row — often buttons or chips */}
          {/* TODO: render from props or state; onClick can push a user message or call your backend. */}
          <div className="chat-quick-replies">
            <button type="button" className="chat-quick-reply">
              Option A
            </button>
            <button type="button" className="chat-quick-reply">
              Option B
            </button>
          </div>

          <section className="chat-user-block">
            <p className="chat-msg-meta">[user placeholder]</p>
            <div className="chat-bubble-placeholder">
              User message placeholder.
            </div>
          </section>

          {/* Intentionally incomplete: add more message blocks or a “typing…” line as you learn */}
        </main>

        {/* --- Composer: input + send --- */}
        {/* TODO: controlled input/textarea + useState; Enter/submit handler; disable send when empty. */}
        <footer className="chat-footer">
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
        </footer>
      </div>
    </div>
  );
}
