import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import Message from "./Message";
import './Message.css'
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';




function App() {
  const [input, setinput] = useState('');
  const [messages, setmessages] = useState([]);
  const [userName, setUserName] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('message').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setmessages([...messages, { userName: userName, message: input }]);
    setinput('')
  }


  useEffect(() => {
    setUserName(prompt('Enter your name'));
  }, [])

  useEffect(() => {
    db.collection('message').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setmessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt="" />
      <form className="app__form">
        <FormControl className ="app__formControl">
          <InputLabel htmlFor="my-input">Enter Message</InputLabel>
          <Input placeholder="Enter your message" className = "app__input" value={input} onChange={event => setinput(event.target.value)} />

          <IconButton className="app__IconButton" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">
            <SendIcon />
          </IconButton>
          {/* <Button >Send</Button> */}
        </FormControl>
      </form>
      {
        <FlipMove>{
          messages.map(({ id, message }) => (
            // <p>{eachMessage}</p>
            <Message key={id} userName={userName} message={message} />

          ))}
        </FlipMove>
      }
    </div>
  );
}

export default App;
