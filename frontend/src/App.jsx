import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', content: 'Hello! How can I help you today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);

    socketInstance.on('ai-message-response', (response) => {
      const botMessage = {
        id: Date.now(),
        sender: 'bot',
        content: response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    });

    return () => socketInstance.disconnect();
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      content: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    if (socket) {
      socket.emit('ai-message', input.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="App">
      <div className="chat-header">
        <h2>ChatBot</h2>
      </div>

      <div className="chat-history">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-content">{msg.content}</div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}

        {isTyping && (
          <div className="message bot typing">
            <div className="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend} disabled={!input.trim()}>Send</button>
      </div>
    </div>
  );
};

export default App;
