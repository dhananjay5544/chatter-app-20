import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

import './TextContainer.css';
import Logo from '../../icons/logo1.svg';

const handleDelete = () => {

}
const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <div style={{display:"flex"}}>
        <img src={Logo} alt="Logo" style={{width:"15%",marginRight:"10px"}}></img>
        <h1 style={{textTransform:"uppercase"}}>Chatter</h1>
      </div>
      <h2>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h2>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h3>People currently chatting:</h3>
            <div className="activeContainer">
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <Chip
                    avatar={<Avatar>{(name.slice(0, 1).toUpperCase())}</Avatar>}
                    label={name}
                    clickable
                    color={((name.charAt(0).match('[a-m]'))) ? "secondary" : "primary"}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                  />
                </div>
              ))}
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;