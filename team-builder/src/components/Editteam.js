import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useFormState } from "./hooks/useFormState";
import { Inputtextarea } from "./styles/FormStyles.js";

export default function Editteam(props) {
  console.log(props);
  const [user, setUser, handlechange] = useFormState(props.currentuser, props);

  useEffect(() => {
    setUser(props.currentuser);
  }, [setUser, props.currentuser]);

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
            <Inputtextarea
              placeholder='Enter Role'
              type='text'
              name='role'
              cols='50'
              rows='10'
              value={user.role}
              onChange={handlechange}
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
