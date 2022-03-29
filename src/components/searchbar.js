import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import AgentList from "../components/agentList";

const agentList = [
    {
    name: "Sam",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Martin",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Anthony",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Marine",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Marjorie",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Lionel",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Romain",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Raphael",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Lorenzo",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "Julien",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  }
];

export default function BasicTextFields() {

    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filtered = !search
    ? agentList
    : agentList.filter((agentList) =>
        agentList.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
        <div>
        <div class="input">
        <TextField  id="standard-basic" label="Rechercher" variant="standard" value={search} onChange={handleSearchChange}/>
        </div>
        {filtered.map((agentList) => {
    return (
        <div className="Contact">
      <img className="avatar" src={agentList.avatar} />
      <div>
        <div className="name">{agentList.name}</div>
      </div> 
    </div>
    );
})}
      </div>
    );
  }