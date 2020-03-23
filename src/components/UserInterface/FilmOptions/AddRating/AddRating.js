import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const AddRating = props => {
  const [rating, setRating] = useState(null);
  const onChangeHandler = selectedValue => {
    setRating(selectedValue);
  };

  let options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(<option key={i}>{i}</option>);
  }
  return (
    <React.Fragment>
      <Form
        className="w-auto d-flex flex-row"
        style={{
          position: "absolute",
          top: "18px",
          left: "-115px",
          zIndex: "1000"
        }}
      >
        <Form.Group controlId="exampleFrom.SelectCustom">
          <Form.Control
            as="select"
            onChange={event => onChangeHandler(event.target.value)}
          >
            {options}
          </Form.Control>
        </Form.Group>
        <Button
          variant="success"
          className="h-75"
          onClick={() => props.close(rating)}
        >
          Send
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default AddRating;
