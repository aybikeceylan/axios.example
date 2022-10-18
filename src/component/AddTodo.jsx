import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function AddTodo({ postTodo }) {
  const [inputVal, setInputVal] = useState("")

  const handleClick = () => {
    const todo = {
      "todo": inputVal,
      "isDone": false
    }
    postTodo(todo)
    setInputVal("")
  }

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
          Button
        </Button>
      </InputGroup>
    </>
  );
}

export default AddTodo;