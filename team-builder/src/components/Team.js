import React, { useState, useEffect } from "react";

export default function Team(props) {
  return (
    <div>
      <ul>
        {props.team.length > 0 ? (
          props.team.map(team => (
            <ul>
              <li> {team.name} </li>
              <li>{team.email}</li>
              <li>{team.role}</li>
              <button onClick={() => {props.editTeam(team)}}>edit</button>
              <button onClick={() => props.deleteUser(team.id)}>delete</button>
              <span>&nbsp;</span>
            </ul>
          ))
        ) : (
          <p>no user</p>
        )}
      </ul>
    </div>
  );
}
