import React, { useState } from "react";
import { Button, Card, Form, FormGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../store/auth";
import history from '../history';
import PageTitle from "../components/PageTitle";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(login(email, password));
    history.push('/');
  }

  return (
    <>
      <PageTitle title="Login" />
        <Card>
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <FormGroup role="form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </form>
          </Card.Body>
        </Card>
      </>
  );
}
