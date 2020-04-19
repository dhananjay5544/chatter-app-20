import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';
import logo from '../../icons/logo1.svg'

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Fork me on Github</h4>
      <div className="joinOuterContainer">
        <div className="djoinInnerContainer">
          <div className="logocontainer">
            <img src={logo} className="logo" alt="chatter" />
            <h1 className="dheading">Chatter</h1>
          </div>
          <h2 className="sub-info">All new revolutionary chatting app</h2>
        </div>
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input placeholder="Enter your name here" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="Enter the room name want to join" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className={'button mt-20'} type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
