import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Singup: React.FC = () => {
  return (
    <div className="container min-height-100 flex align-items-center justify-content-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form bg-white flex  justify-content-center flex-column"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <p>
          Already have an account? <Link to={'/login'}>Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Singup;