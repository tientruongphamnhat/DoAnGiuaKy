import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fetch from 'cross-fetch';

function AlertForm(props) {
  const { kindAlert, message } = props;
  if (kindAlert === 'failed') {
    return (
      <Alert variant="danger">
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>{message};</p>
      </Alert>
    );
  }
  if (kindAlert === 'success') {
    return (
      <Alert variant="success">
        <Alert.Heading>Register Successfully</Alert.Heading>
        You can login here <Link to="/login">Login</Link>
      </Alert>
    );
  }
  if (kindAlert === 'missFill') {
    return (
      <Alert className="alert-info" variant="primary">
        <Alert.Heading>
          Oh snap! Change a few things up and try submitting again.!
        </Alert.Heading>
      </Alert>
    );
  }
  return null;
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kindAlert: 'normal',
      message: 'none'
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const name = e.target.formBasicName.value;
    const password = e.target.formBasicPassword.value;
    let check = true;

    if (!email || !name || !password) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    // http://localhost:5000/users/register
    // https://btcn6.herokuapp.com/users/register
    fetch('http://localhost:5000/users/register', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        name,
        password
      })
    })
      .then(response => {
        if (response.status !== 200) {
          check = false;
        }
        return response.json();
      })
      .then(response => {
        if (!check) {
          this.setState({
            kindAlert: 'failed',
            message: response.message
          });
        } else {
          this.setState({
            kindAlert: 'success'
          });
        }
      });
  };

  renderAlert() {
    const { kindAlert, message } = this.state;
    return <AlertForm kindAlert={kindAlert} message={message} />;
  }

  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="container col-md-5">
            {this.renderAlert()}
            <Form className="mx-auto" onSubmit={e => this.handleSubmit(e)}>
              <h2>
                <span className="font-weight-bold">Register</span>
              </h2>
              <FormGroup controlId="formBasicEmail">
                <Form.Label className="username">Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="input" placeholder="full name" />
              </FormGroup>
              <FormGroup controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </FormGroup>
              <Button variant="primary" type="submit">
                Resgister
              </Button>
              <Link to="/login" className="btn btn-link">
                LogIn
              </Link>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
