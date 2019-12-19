import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Editteam(props) {
  const [user, setUser] = useState(props.currentuser);

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUser(props.currentuser);
  }, [props]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.updateUser(user.id, user);
        }}>
        <fieldset className='formfield'>
          <label className='forms'>
            Name: &nbsp;
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              value={user.name}
              onChange={handleInputChange}
            />
          </label>
          <label className='forms'>
            Email: &nbsp;
            <input
              placeholder='Enter Email'
              type='text'
              name='email'
              value={user.email}
              onChange={handleInputChange}
            />
          </label>
          <label className='forms'>
            Role: &nbsp;
            <input
              placeholder='Enter Role'
              type='text'
              name='role'
              value={user.role}
              onChange={handleInputChange}
            />
          </label>
          <Button style={{ margin: `0 auto`, marginTop: `.5%` }} type='submit'>
            Update
          </Button>{" "}
          <Button
            style={{ margin: `0 auto`, marginBottom: `3%`, marginTop: `.5%` }}
            variant='secondary'
            size='sm'
            onClick={() => props.setEditing(false)}>
            Cancel
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
