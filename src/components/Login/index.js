import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';

function AlertF(props) {
  const { isAlert } = props;

  if (isAlert) {
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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlert: false
    };
  }

  handleSubmit = e => {
    const { login } = this.props;
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    if (!email || !password) {
      this.setState({
        isAlert: true
      });
      return;
    }

    login(email, password);
  };

  renderAlert() {
    const { isAlert } = this.state;
    return <AlertF isAlert={isAlert} />;
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container col-md-5">
          {this.renderAlert()}
          <Form className="mx-auto" onSubmit={e => this.handleSubmit(e)}>
            <h2>
              <span className="font-weight-bold">Đăng Nhập</span>
            </h2>
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Địa chỉ Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email" />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control type="password" placeholder="Mật khẩu" />
            </FormGroup>
            <Button variant="primary" type="submit">
              Đăng nhập
            </Button>
            <Link to="/register" className="btn btn-link">
              Đăng Ký
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
