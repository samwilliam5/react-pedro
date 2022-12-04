import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';



const Redux = () => {

    const userList =useSelector((state)=>state.users.value)
  return (
    <div>
      <InputGroup className="mb-3 w-50 mx-auto ">
        <Form.Control
          placeholder="Name" />
          <Form.Control
          placeholder="UserName" />
        <Button variant="outline-secondary" id="button-addon2">
          ADD USER
        </Button>
      </InputGroup>
      <ListGroup>
        {userList.map((user, index) => (
          <ListGroup.Item key={index}>
            {user.name}
          </ListGroup.Item>
        ))}
    
    </ListGroup>
    </div>
  )
}

export default Redux
