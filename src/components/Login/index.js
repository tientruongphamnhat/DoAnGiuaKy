import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

function login() {
  return (
    <Form>
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
    </Form>
  );
}

export default login;
