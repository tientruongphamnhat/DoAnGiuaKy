import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';

function AlertF(props) {
  const { kindAlert, message } = props;

  if (kindAlert === 'missFill') {
    return (
      <Alert className="alert-info" variant="primary">
        <Alert.Heading>
          Oh snap! Change a few things up and try submitting again.!
        </Alert.Heading>
      </Alert>
    );
  }
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
        <Alert.Heading>Login Successfully</Alert.Heading>
        Go To Home <Link to="/">HomePage</Link>
      </Alert>
    );
  }
  return null;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kindAlert: 'normal'
    };
  }

  handleSubmit = e => {
    const { login } = this.props;
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    if (!email || !password) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    login(email, password);
  };

  renderAlert() {
    const { kindAlert } = this.state;
    const { user } = this.props;
    if (Object.keys(user).length === 0) {
      return <AlertF kindAlert={kindAlert} />;
    }
    if (Object.keys(user).length === 1) {
      return <AlertF kindAlert="failed" message={user.message} />;
    }
    return <AlertF kindAlert="success" message={user.message} />;
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container col-md-5">
          {this.renderAlert()}
          <Form className="mx-auto" onSubmit={e => this.handleSubmit(e)}>
            <h2>
              <span className="font-weight-bold">Log In</span>
            </h2>
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Fill your email" />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Fill your pasword" />
            </FormGroup>
            <Button variant="primary" type="submit">
              LogIn
            </Button>
            <Link to="/register" className="btn btn-link">
              Resgister
            </Link>
          </Form>
          <div className="container d-flex col-sm-12 pt-3">
            <FacebookLoginButton />
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
