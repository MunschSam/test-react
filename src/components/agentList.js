import React, {useState} from "react";
import Agent from "../components/agent";

const agentList = [
    {
    name: "sam",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "martin",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "anthony",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  },
  {
    name: "marine",
    avatar: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
  }
];

function AgentList(){

return(
    <div>
    {agentList.map((agent, index) => (
        <Agent
          key={index}
          name={agent.name}
          avatar={agent.avatar}
        />
      ))}
      </div>
);
}
  export default AgentList;