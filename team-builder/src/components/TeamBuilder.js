import React from 'react';

const TeamBuilder = (props) => {
   
    return (
        <div>
         {props.team.map((elem,i) => {
             return <div name={i} key={elem.name}>
               <p><strong>Name:</strong> {elem.name}</p>  
               <p><strong>Email:</strong> {elem.email}</p>
               <p><strong>Role:</strong> {elem.role}</p>
              <button disabled={false}  name={i} onClick={props.onClick}>Edit Member</button>

                
               
               
              
             </div>
         })}
        </div>
    );
};

export default TeamBuilder;