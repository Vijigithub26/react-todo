import React, { useState } from 'react'

function EditInput(props) {
  const {currentTodo,data,setUser,setEdit,setCurrentTodo}=props
   function handleEditNameChange (e){
    setCurrentTodo({...currentTodo,name:e.target.value})
   }
   const handleEditUserNameChange = (e) => {
     setCurrentTodo({...currentTodo,userName:e.target.value})
   }
   function handleEditFormSubmit (e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id,currentTodo)
   }
    function handleUpdateTodo (id,updatedTodo){
        console.log(handleUpdateTodo,'handleUpdateTodo')
   const updatedItem = data.map((oldData) => {
    return oldData.id === id ? updatedTodo: oldData;
   })
   setEdit(false);
    setUser(updatedItem)
}

  return (
    <div>
        <form onSubmit={handleEditFormSubmit} className='container'>
        <label>Name:</label>
        <input type="text" onChange={handleEditNameChange} name="name" value={currentTodo.name} placeholder='Enter your name....'/><br></br>
        <label>Username: </label>
        <input type="text" name="username" onChange={handleEditUserNameChange} value={currentTodo.userName} placeholder='Enter your username....'/>
        <button type="submit" >Update user</button><br></br>
        </form>
    </div>
  )
}

export default EditInput;