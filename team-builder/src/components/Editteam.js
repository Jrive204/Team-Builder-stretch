import React, { useState } from "react";

export default function Editteam(props) {
  const [user, setUser] = useState(props.currentuser);

  const handleInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return(
    <div>
    <form onSubmit={(e) => {
        e.preventDefault()
        props.updateUser(user.id,user)
    }}>
      <fieldset>
        <legend>Sign UP</legend>
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
        <button>Update User</button>
        <button onClick={() => props.setEditing(false) }>Cancel</button>
      </fieldset>
    </form>
  </div>

  )
}
