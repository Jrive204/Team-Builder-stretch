import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Form";
import Team from "./components/Team";
import Editteam from "./components/Editteam";

function App() {
  const ourteam = [
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
  const [team, setTeam] = useState(ourteam);
  const [editing, setEditing] = useState(false);
  const [currentuser, setCurrentuser] = useState({
    id: null,
    name: ``,
    email: ``,
    role: ``
  });

  const addNewteam = t => {
    const newTeam = {
      id: Date.now(),
      name: t.name,
      email: t.email,
      role: t.role
    };

    setTeam([...team, newTeam]);
  };

  console.log(team);

  const deleteUser = id => {
    setTeam(team.filter(t => t.id !== id, console.log(id, `id`)));
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
