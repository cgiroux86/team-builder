import React from 'react';

const Form = (props) => {
   
    return (
        <form onSubmit={props.handleSubmit}>
            <label >New Member
            <input onChange= {props.handleChange} name='name' type='text'
            value={props.member.name}/>
            </label>
            <label >Email
            <input onChange= {props.handleChange} name='email' type='text' value={props.member.email}/>
            </label>
            <label >Role
            <input onChange= {props.handleChange} name='role' type='text' value={props.member.role}/>
            </label>
            <button type='submit'>Add To Team</button>
        </form>
    );
};

export default Form;