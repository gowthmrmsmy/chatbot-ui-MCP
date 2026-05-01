import "../App.css";

export default function Quickreply({quickreplies, onSelect}) {


  if (!quickreplies.length) return null; 
    return(
      <>
        {quickreplies.map((reply) => (
        <button
          key={reply.value}
          type="button"
          className="chat-quick-reply"
          onClick={() => onSelect?.(reply)}
        >
          {reply.label}
        </button>
      ))}
      </>
      
        
        
    )
}     