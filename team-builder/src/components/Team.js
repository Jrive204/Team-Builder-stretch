import React from "react";
import Button from "react-bootstrap/Button";

const Team = props => {
  return (
    <div className='teamDiv'>
      <ul>
        {props.team.length > 0 ? (
          props.team.map(teams => (
            <div
              key={teams.id}
              style={{
                display: `flex`,
                flexDirection: `column`,
                width: `15%`,
                alignItems: `flex-start`,
                flexWrap: `wrap`
              }}>
              <li> {teams.name} </li>
              <li>{teams.email}</li>
              <li>{teams.role}</li>
              <Button
                onClick={() => {
                  props.editTeam(teams);
                }}
                variant='info'
                size='sm'>
                Edit
              </Button>

              <Button
                onClick={() => props.deleteUser(teams.id)}
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
};
export default Team;
