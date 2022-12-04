import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import {TiDelete} from 'react-icons/ti';
import { useRef, useState } from 'react';
// import {TiTick} from 'react-icons/ti';


const Todo = () => {

  const inputClear=useRef(null)
const [addTask,setAddtask] =useState('')
const [todo,setTodo] =useState([])

const BtnAdd=()=>{
  inputClear.current.value=''
  inputClear.current.focus()
    const newlist = {
      id:todo.length === 0  ? 1 : todo[todo.length - 1].id +1,
      newTask:addTask,
      
    }

    setTodo([...todo,newlist])
}

const BtnDelete=(id)=>{
    setTodo(todo.filter((task)=>(
     task.id !== id
    )))
   

}


// const btnComplete = (id)=>{
// setTodo(todo.map((task)=>(
//  task.id === id ? {...task, isCompleted:true } : {task}
// )))
// }

  return (
    <div>
      <InputGroup className="mb-3 w-50 mx-auto ">
        <Form.Control
          placeholder="Add Task To Your List" onChange={(e)=>setAddtask(e.target.value)} ref={inputClear}/>
        <Button variant="primary" id="button-addon2" onClick={BtnAdd}  >
          ADD       
        </Button>
      </InputGroup>
      {addTask}
      <ListGroup as="ul"   >
        {todo.map((task,index)=>(
      <ListGroup.Item as="li" className='w-50 mx-auto my-3 fs-4'key={index} >
          {task.newTask}
<TiDelete className='fs-3 ' style={{color:'green'}} onClick={()=>BtnDelete(task.id)}  />

</ListGroup.Item>
        ))}
        
{/* <TiTick className='fs-3 ' style={{ color: task.isCompleted ? 'green' : 'red'}} onClick={()=>btnComplete(task.id)}/> */}

     

   

  



    </ListGroup>
<hr />

    </div>
  )
}

export default Todo
