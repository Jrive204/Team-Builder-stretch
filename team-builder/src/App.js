import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Forms from "./components/Form";
import Team from "./components/Team";
import Editteam from "./components/Editteam";

function App() {
  const newteam = [
    {
      id: 1,
      name: `Jeff`,
      email: `jb@gmail.com`,
      role: `Backend`
    },
    {
      id: 2,
      name: `Hannah`,
      email: `Hrock@gmail.com`,
      role: `Frontend`
    }
  ];
  const [team, setTeam] = useState(newteam);
  const [editing, setEditing] = useState(false);
  const [currentuser, setCurrentuser] = useState({
    id: null,
    name: ``,
    email: ``,
    role: ``
  });

  const addNewteam = teams => {
    const newTeam = {
      id: team.length + 1,
      name: teams.name,
      email: teams.email,
      role: teams.role
    };

    setTeam([...team, newTeam]);
  };

  console.log(team);

  const deleteUser = id => {
    setTeam(team.filter(t => t.id !== id));
    setEditing(false);
  };

  const editTeam = user => {
    setEditing(true);

    setCurrentuser({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setTeam(team.map(t => (t.id === id ? updateUser : t)));
  };

  return (
    <div className='App'>
      <h1>Team Management Tool</h1>
      {editing ? (
        <div>
          <h2>Edit Member</h2>
          <Editteam
            editTeam={editTeam}
            setEditing={setEditing}
            currentuser={currentuser}
            updateUser={updateUser}></Editteam>
        </div>
      ) : (
        <div>
          <h2>Add Member</h2>
          <Forms addNewteam={addNewteam} team={team}></Forms>
        </div>
      )}
      <Team deleteUser={deleteUser} team={team} editTeam={editTeam}></Team>
    </div>
  );
}

export default App;
