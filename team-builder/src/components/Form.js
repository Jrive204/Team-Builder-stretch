import React, { useState } from "react";

export default function Forms(props) {
  const [user, setUser] = useState({ name: ``, email: ``, role: `` });

  function handlechange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(`change`, e.target.name, e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    props.addNewteam(user);
    console.log(`user`, user);
    setUser({ name: ``, email: ``, role: `` });
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <fieldset>
          <legend>Sign UP</legend>
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
          <input type='submit' value='Submit' />
        </fieldset>
      </form>
    </div>
  );
}
