import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



const About = () => {
    const [addItem,setAdditem]=useState('')
    const [todo,setTodo]=useState([])


    const btnAdd=()=>{
        const newItem={
            id:todo.length === 0 ? 1 : todo[todo.length-1].id+1,
            itemAdd:addItem,
        }
        setTodo([...todo,newItem])
    }

    const btnDelete=(id)=>{
        setTodo(todo.filter(item => item.id!== id))

    }
  return (
    <div>
      About Page | Todo List

      <>
      <InputGroup className="mb-3 w-25 mx-auto" >
        <Form.Control
          placeholder="Add item" onChange={(e)=>setAdditem(e.target.value)}/>
        <Button variant="outline-secondary" id="button-addon2" onClick={btnAdd}>
          ADD 
        </Button>
      </InputGroup>
      {addItem}
      <ListGroup className='w-25 mx-auto my-4 '>
        {todo.map((item, index) => (
            <div>
          <ListGroup.Item key={index} className='p-2'>
            {item.itemAdd}
          </ListGroup.Item>
          <Button variant='success'  className='my-3' onClick={()=>btnDelete(item.id)}>Delete</Button>

          </div>
        ))}
     

    </ListGroup>

    </>
    </div>
  )
}

export default About
