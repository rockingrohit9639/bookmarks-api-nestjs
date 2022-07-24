import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Singup: React.FC = () => {
  return (
    <div className="container min-height-100 flex align-items-center justify-content-center">
      <Form
        name="signup"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form bg-white flex  justify-content-center flex-column"
        layout="vertical"
      >
        <Typography.Title className="bold">
          Hey there, Good to see you
        </Typography.Title>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Typography.Text>
          Already have an account? <Link to={'/login'}>Login</Link>
        </Typography.Text>
      </Form>
    </div>
  );
};

export default Singup;
