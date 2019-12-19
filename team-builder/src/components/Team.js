import React, { useState, useEffect } from "react";

export default function Team(props) {
  const changeteam = () => {
    props.EditTeam();
  };
  return (
    <div>
      <ul>
        {props.team.map((team, i) => (
          <ul>
            <li> {team.name} </li>
            <li>{team.email}</li>
            <li>{team.role}</li>
            <button onClick={() => props.deleteUser(team)}>edit</button>
            <span>&nbsp;</span>
          </ul>
        ))}
      </ul>
    </div>
  );
}
