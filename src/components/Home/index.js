import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Form>
        <Form.Label className="ml-5 ml-lg-0">Họ và tên:</Form.Label>
        <Form.Label>Trương Phạm Nhật Tiến</Form.Label>
      </Form>
      <Button>Đăng xuất</Button>
    </>
  );
}

export default Home;
