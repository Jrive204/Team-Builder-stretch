import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Forms from "./components/Form";
import Team from "./components/Team";

function App() {
  const newteam = [
    {
      name: `Jeff`,
      email: `jb@gmail.com`,
      role: `Backend`
    },
    {
      name: `Hannah`,
      email: `Hrock@gmail.com`,
      role: `Frontend`
    }
  ];
  const [team, setTeam] = useState(newteam);
  const [membertoedit, setMembertoedit] = useState(``);

  const addNewteam = teams => {
    const newTeam = {
      name: teams.name,
      email: teams.email,
      role: teams.role
    };

    setTeam([...team, newTeam]);
  };

  const deleteUser = id => {
    setTeam(team.filter(team => team.id !== id));
  };

  return (
    <div className='App'>
      <Forms addNewteam={addNewteam} team={team}></Forms>
      <Team deleteUser={deleteUser} team={team}></Team>
    </div>
  );
}

export default App;
