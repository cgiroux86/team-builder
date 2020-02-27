import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TeamBuilder from './components/TeamBuilder'

function App() {
  const [member, addMember] = useState({
      name: '',
      email: '',
      role: ''
  })
  const [team, updateTeam] = useState([{
    name: 'Chris',
    email: 'chris@chris.com',
    role: 'tech lead'
  }])
  const [edited, editMember] = useState({
    name: '',
    email: '',
    role: '',
  })

  const handleChange = e => {
   addMember({...member, [e.target.name] : e.target.value})
    console.log(member)
}
const handleEdit = e => {
  editMember({...edited, [e.target.name] : e.target.value})
  console.log(edited)
}


const newMember = teammate => {
    const mem = {
        id: Date.now(),
        name: teammate.name,
        email: teammate.email,
        role: teammate.role
    }
    updateTeam([...team,mem])
    console.log(mem)
}

const handleSubmit = e => {
  e.preventDefault()
  newMember(member)
  console.log(member)
  addMember({name: '', email: '', role:''})
   
    



}

  const onClick = (e) => {
    const name = e.target.name
    const sliced = team.filter((elem,i) => i !== Number(name))
    updateTeam(sliced)
}

const update = (e) => {
  e.preventDefault()
  const find = (e.target.name)
  console.log(find)
  let found = team.find(elem => elem.name == find)
  console.log(found)
  editMember({...found, [e.target.name] :e.target.value})
  console.log(edited)
  let filtered = team.filter(elem => elem.name != find)
  console.log(filtered)
  updateTeam([filtered])
}
 
  return (
    <div className="App">
     
      <Form update={update} handleChange={handleChange} handleSubmit={handleSubmit} member = {member} addMember = {addMember} team={team} updateTeam={updateTeam}/>
      <TeamBuilder handleEdit = {handleEdit} update={update} onClick= {onClick}  team={team} updateTeam={updateTeam} member = {member} addMember={addMember} />
    </div>
  );
}

export default App;
