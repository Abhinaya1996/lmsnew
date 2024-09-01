import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const {isLoggedIn, login} = useContext(AuthContext)
    const onFinish = (values) => {
        //send values to database and validate
        if(values.username === "admin" && values.password === "admin"){
            login()
        }else{
            alert("Invalid Credentials")
        }
        
        console.log("login",isLoggedIn)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(<Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}Login
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>)
}
  
export default Login;