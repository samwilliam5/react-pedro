import React, { useRef, useState } from 'react'

const Footer = () => {
  const[add,setAdd]=useState('')
  const[todo,setTodo]=useState([])

  const inputRef=useRef(null)

  const btnAdd=()=>{
    inputRef.current.focus()
    inputRef.current.value=''

    const newID={
      id:todo.length === 0 ? 1 : todo[todo.length-1].id+1,
      listName:add,
      isComplete:false
    }

    setTodo([...todo,newID])
  }
  
  const btnDelete=(id)=>{
    setTodo(todo.filter((list)=>(
       list.id !== id
    )))
  }
  
  

  return (
    <div>
      <input type="text" onChange={(e)=>setAdd(e.target.value)} ref={inputRef}/>
      <button className="btn btn-primary" onClick={btnAdd}>ADD</button>
      <h3>MY List</h3>
      
        {todo.map((list)=>(
          <div className='border border-5 border-dark rounded mx-auto my-3 py-3 w-25 bg-primary text-light '>
  <p>{list.listName}</p>
  <button className="btn btn-success mx-3" onClick={()=>btnDelete(list.id)}>Delete</button>
  </div>
        ))}
      
      
    </div>
  )
}

export default Footer
