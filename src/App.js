import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message';


class App extends Component {


  render() {
    console.log(chatMessages);

    const messageComponents = chatMessages.map((chatMessage, i=0) => {
      i += 1
      return (
          < Message
            sender = {chatMessage.sender}
            body = {chatMessage.body}
            timeStamp = {chatMessage.timeStamp}
          />
      );
  });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <div className="chat-entry">
            {messageComponents}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
