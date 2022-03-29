import React from "react";
import Contact from "./components/contact";
import "./contact.css";
import Searchbar from "./components/searchbar";
import AgentList from "./components/agentList";

export default function App() {
  return (
    <div className="App">
      <Contact />
      <hr/>
      <Searchbar />
    </div>
  );
}





