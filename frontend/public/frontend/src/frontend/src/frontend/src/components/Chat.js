// frontend/src/components/Chat.js
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages(prev => [...prev, input.trim()]);
      setInput('');
    }
  };

  return (
    <div>
      <div 
        style={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          height: '300px', 
          overflowY: 'scroll', 
          marginBottom: '10px' 
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: '5px 0' }}>{msg}</div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="Type a message..." 
        style={{ width: '70%', padding: '8px' }}
      />
      <button onClick={sendMessage} style={{ padding: '8px 15px', marginLeft: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default Chat;
