import React, { Component } from 'react';
import PropType from 'prop-types';
// import './TimelineEvent.css';
import Timestamp from './Timestamp';

class Message extends React.Component {

  static propTypes = {
    sender: PropType.string.isRequired,
    body: PropType.string.isRequired,
    // when I set the time using timestamp component do I
    // have to do the validation here or do I assume
    // that the validation is being done Timestamp component itself?
    isPresent: PropType.bool,
  }

  render() {
    // Fill in your code here
    return(
      <div className="entry-bubble">
        <div className="entry-name">
        {this.props.sender}
        </div>
        <div className="entry-body">
        {this.props.body}
        </div>
        <time className="entry-time">
          < Timestamp time = {this.props.timeStamp}/>
        </time>
      </div>
    );
  }
}

export default Message;
