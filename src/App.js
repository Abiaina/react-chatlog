import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message';


class App extends Component {
  isLocal = (author) => {
    if(author === 'Vladimir'){
      return 'local'
    }
    return 'remote'
  }

  render() {

    const messageComponents = chatMessages.map((chatMessage, i=0) => {
      i += 1
      return (
        <section className="chat-entry">
        <output className={() => {this.isLocal(chatMessage.author)}}>
        < Message
        sender = {chatMessage.sender}
        body = {chatMessage.body}
        timeStamp = {chatMessage.timeStamp}
        />
        </output>
        </section>
      );
    });

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
      <div>
      {messageComponents}
      </div>
      </main>
      </div>
    );
  }
}

export default App;
