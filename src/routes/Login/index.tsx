import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography  } from 'antd';
import AppContext from '../../core/AppContext';

const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 7 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 7 },
};

const Login = () => {
  const { ContextAuth } = AppContext;
  const { loginAuth } = useContext(ContextAuth);

  const history = useHistory();

  const onHandleToSubmit = (values: object) => {
    loginAuth({
      ...values,
      isLogin: true
    })
    history.push('./movies');
  };

  const onHandleToRegister = () => {
    history.push('./register');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{paddingTop: '50px'}}>

      <Typography.Title level={3} style={{textAlign:'center'}}> L O G I N </Typography.Title>
      <br/>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onHandleToSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>{' '}
          <Button type="link" onClick={onHandleToRegister}>
            Register Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;