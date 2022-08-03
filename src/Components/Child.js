import React, { useState } from 'react'
import EditInput from './EditInput';


const Child=(props)=> {
    const [currentTodo,setCurrentTodo] = useState({});
    const [edit,setEdit] = useState(false)
    const {data,setUser}=props
    

const handleDelete =(index)=>{
   const deleteValue = data.filter((x)=>{
    return x.id !== index
   })
   setUser(deleteValue)
}  
const handleEditClick=(data)=>{
  console.log("data",data)
      setEdit(true)
      setCurrentTodo({...data})
}
 return (
    <>
  <table style={{textAlign:'center'}} >
    <tr >
        <th>Name</th>
        <th>UserName</th>
        <th>Action</th>
        
      </tr>
        {props.data.map((data,index)=>
        <tr>
           <td key={index}>{data.name}</td>
        
        
        <td key={index}>{data.userName}</td>
        <td>
            <button onClick={()=>handleDelete(data.id)}>delete</button>
        </td>
        <td>
            <button onClick={()=>handleEditClick(data)}>Edit</button>
           
        </td>
     </tr>
        )}
       
    </table> 
    {edit && (
      <EditInput setCurrentTodo={setCurrentTodo} currentTodo={currentTodo}  data={data} setUser={setUser} setEdit={setEdit}/>
    )}
    </>
  )
}

export default Child