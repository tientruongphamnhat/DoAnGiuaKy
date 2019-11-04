import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, FormGroup, Alert } from 'react-bootstrap';

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
        <Alert.Heading>Change Infomation Successfully</Alert.Heading>
      </Alert>
    );
  }
  return null;
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kindAlert: 'normal'
    };
  }

  handleSubmitChangeName = e => {
    const { changeName, user } = this.props;
    e.preventDefault();
    const name = e.target.formBasicName.value;

    if (!name) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    changeName(user.user.email, name);
    this.setState({
      kindAlert: 'success'
    });
  };

  handleSubmitChangePassword = e => {
    const { changePassword, user } = this.props;
    e.preventDefault();
    const password = e.target.formBasicPassword.value;

    if (!password) {
      this.setState({
        kindAlert: 'missFill'
      });
      return;
    }

    changePassword(user.user.email, password);
    this.setState({
      kindAlert: 'success'
    });
  };

  renderAlert() {
    const { kindAlert } = this.state;
    const { user } = this.props;

    if (Object.keys(user).length === 1) {
      return <AlertF kindAlert="failed" message={user.message} />;
    }
    if (
      Object.keys(user).length > 1 &&
      kindAlert !== 'normal' &&
      kindAlert !== 'missFill'
    ) {
      return <AlertF kindAlert="success" message={user.message} />;
    }
    return <AlertF kindAlert={kindAlert} />;
  }

  render() {
    const { user } = this.props;
    if (Object.keys(user).length > 1) {
      return (
        <>
          {this.renderAlert()}
          <div className=" container d-flex">
            {/* <Image>Image</Image> */}
            <div>
              <Form onSubmit={e => this.handleSubmitChangeName(e)}>
                <FormGroup controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="input" placeholder={user.user.name} />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Change
                </Button>
              </Form>
            </div>
            <div className="ml-3">
              <Form onSubmit={e => this.handleSubmitChangePassword(e)}>
                <FormGroup controlId="formBasicPassword">
                  <Form.Label>New password</Form.Label>
                  <Form.Control type="password" placeholder="new password" />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Change
                </Button>
              </Form>
            </div>
          </div>
        </>
      );
    }
    return (
      <Alert>
        <Alert.Heading variant="info">Please Login To Play Game</Alert.Heading>
      </Alert>
    );
  }
}

export default Home;
