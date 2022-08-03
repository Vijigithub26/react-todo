import { useEffect, useState } from "react";
import Child from './Child'


 const AddUserForm = ()=>{
    const [user,setUser] =  useState([]);
    const [name,setName] = useState("")
    const [userName,setUserName] = useState("")
    const handleNameChange = (event)=>{
      setName(event.target.value)
    }

    const handleUserNameChange = (e) => {
      setUserName(e.target.value)
    }
   
    const handleSubmit = (event)=>{
      const obj = {
        id:user.length+1,
        name: name,
        userName: userName
      }
      event.preventDefault();
        setUser([...user,obj]);
        setName("")
        setUserName("")
    }
 
    return (
      <div>
     
    <form onSubmit={handleSubmit} className='container'>
        <label>Name:</label>
        <input type="text" onChange={handleNameChange} name="name" value={name} placeholder='Enter your name....'/>
        {/* <input type="text" name="name" value="hema" placeholder='Enter your name....'/> */}
        <label>Username: </label>
        <input type="text" onChange={handleUserNameChange} name="username" value={userName} placeholder='Enter your username....'/>
        <button type="submit" >Add new user</button><br></br>
    </form>
      <Child data={user} setUser={setUser} />  
    
      </div>
    );
 }

export default AddUserForm;


