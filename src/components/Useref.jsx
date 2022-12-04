import React, { useRef } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Useref = () => {

    const inputRef= useRef(null)


    const handleInput=()=>{
       console.log(inputRef.current.value)
    }

  return (
     
    <div>
      <InputGroup className="mb-3 w-50 mx-auto ">
        <Form.Control
          placeholder="Add Task To Your List" ref={inputRef} />
        <Button variant="primary" id="button-addon2" onClick={handleInput} >
          ADD       
        </Button>
      </InputGroup>
    </div>
  )
}

export default Useref
