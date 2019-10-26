import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup } from 'react-bootstrap';

function Register() {
  return (
    <Form>
      <h2>
        <span className="font-weight-bold">Đăng Ký</span>
      </h2>
      <FormGroup controlId="formBasicEmail">
        <Form.Label>Địa chỉ Email</Form.Label>
        <Form.Control type="email" placeholder="Nhập email" />
      </FormGroup>
      <FormGroup controlId="formBasicEmail">
        <Form.Label>Họ và Tên</Form.Label>
        <Form.Control type="input" placeholder="Họ và tên" />
      </FormGroup>
      <FormGroup controlId="formBasicPassword">
        <Form.Label>Mật Khẩu</Form.Label>
        <Form.Control type="password" placeholder="Mật khẩu" />
      </FormGroup>
      <Button variant="primary" type="submit">
        Đăng ký
      </Button>
    </Form>
  );
}

export default Register;
