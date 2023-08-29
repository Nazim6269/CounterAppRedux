import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../redux/actionsTypes/actionsType";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "20rem", border: "2px solid #40F8FF" }}>
        <Card.Body>
          <Card.Title className="fs-4"> Counter App with Redux</Card.Title>
          <Card.Text className="fs-5">Count : {count}</Card.Text>
          <Button
            variant="info"
            onClick={() => {
              dispatch({ type: INCREMENT });
            }}
          >
            Increment
          </Button>
          <Button
            variant="danger"
            className="mx-2 "
            onClick={() => {
              dispatch({ type: DECREMENT });
            }}
          >
            Decrement
          </Button>
          <Button variant="success" onClick={() => dispatch({ type: RESET })}>
            Reset
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Counter;
