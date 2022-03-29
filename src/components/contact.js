import React, {useState} from "react";
import Switch from '@mui/material/Switch';


const test = {
  name: "sam",
  avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
};

function Contact() {
  const [toggle, setToggle] = useState(false);
  const toggler =() => {toggle ? setToggle(false): setToggle(true);
    
  }
  return (
    <div className="Contact">
      <img className="avatar" src={test.avatar} />
      <div>
        <div className="name">{test.name}</div>
      </div>
      <Switch onClick={toggler}/>
      {toggle ? <span><div className="status">
            <div className="status-text">online</div>
            <div className="status-online"></div>
          </div></span>: <span><div className="status">
            <div className="status-text">offline</div>
            <div className="status-offline"></div>
          </div></span>}
    </div>
  );
}
export default Contact;