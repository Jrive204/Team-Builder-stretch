import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Forms(props) {
  const [user, setUser] = useState({ id: null, name: ``, email: ``, role: `` });

  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(`change`, e.target.name, e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!user.name || !user.email || !user.role) return;
    props.addNewteam(user);
    console.log(`user`, user);
    setUser({ id: null, name: ``, email: ``, role: `` });
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <fieldset className='formfield'>
          <label className='forms'>
            Name: &nbsp;
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              value={user.name}
              onChange={handlechange}
            />
          </label>

          <label className='forms'>
            Email: &nbsp;
            <input
              placeholder='Enter Email'
              type='text'
              name='email'
              value={user.email}
              onChange={handlechange}
            />
          </label>
          <label className='forms'>
            Role: &nbsp;
            <input
              placeholder='Enter Role'
              type='text'
              name='role'
              value={user.role}
              onChange={handlechange}
            />
          </label>
          <Button
            style={{ margin: `0 auto`, marginBottom: `3%`, marginTop: `.5%` }}
            type='submit'>
            Submit
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
