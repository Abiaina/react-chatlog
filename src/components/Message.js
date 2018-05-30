import React, { Component } from 'react';
// import './TimelineEvent.css';
import Timestamp from './Timestamp';

class Message extends React.Component {

  // static propTypes = {
  //   sender: PropTypes.string.isRequired,
  //   body: PropTypes.string.isRequired,
  //   // when I set the time using timestamp component do I
  //   // have to do the validation here or do I assume
  //   // that the validation is being done Timestamp component itself?
  //   isPresent: PropTypes.bool,
  // }

  render() {
    // Fill in your code here
    return(
      <div>
        {this.props.sender}
        {this.props.body}
        < Timestamp time = {this.props.timeStamp}/>
      </div>
    );
  }
}

export default Message;
