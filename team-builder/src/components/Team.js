import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Team(props) {
  return (
    <div className='teamDiv'>
      <ul>
        {props.team.length > 0 ? (
          props.team.map(team => (
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                width: `15%`,
                alignItems: `flex-start`,
                flexWrap: `wrap`
              }}>
              <li> {team.name} </li>
              <li>{team.email}</li>
              <li>{team.role}</li>
              <Button
                onClick={() => {
                  props.editTeam(team);
                }}
                variant='info'
                size='sm'>
                Edit
              </Button>

              <Button
                onClick={() => props.deleteUser(team.id)}
                variant='danger'
                size='sm'>
                Delete
              </Button>
              <span>&nbsp;</span>
            </div>
          ))
        ) : (
          <p>no user</p>
        )}
      </ul>
    </div>
  );
}
