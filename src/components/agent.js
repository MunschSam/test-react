import React from 'react';

const Agent = props => {
  return (

    <div className="Contact">
    <img className="avatar" src={props.avatar} />
    <div className="name">{props.name}</div>
    </div>
  );
};

export default Agent;
