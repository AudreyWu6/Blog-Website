import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Layout } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { login, signup } from "../../actions/authentication";

import styles from "./styles";

export const AuthForm = () => {
    // const user = null;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form] = Form.useForm();
    const [isLogin, setIsLogin] = useState(true)
    const onsubmit = (formValues) => {
        if (isLogin) {
            dispatch(login({formValues, navigate}));
        } else {
            dispatch(signup({formValues, navigate}));
        }
    }
    const switchMode = () => {
        setIsLogin(prevIsLogin => !prevIsLogin);
    }

  return (
    <Layout style={styles.container}>
        <Card style={styles.card} 
            title={
                <title level={4} style={{textAlign: "center"}}>
                    { isLogin ? "Login to" : "Join" } Instaverse
                </title>
            }>
            <Form name = "authForm" form= {form} size= "larger" wrapperCol={{span: 20, offset: 2}} onFinish={onsubmit}>
                {isLogin || (
                    <>
                        <Form.Item name="username" rules={[
                            {
                                required: true,
                                message: "Please enter your username"
                            }
                        ]}>
                            <Input prefix={<UserOutlined />} placeholder='username' />
                        </Form.Item>
                    </>
                )}
                <Form.Item name="email" rules={[
                    {
                        required: true,
                        message: "Please enter your valid email address"
                    }
                ]}>
                    <Input type="email" prefix={<MailOutlined />} placeholder='email address' />
                </Form.Item>
                <Form.Item name="password" rules={[
                    {
                        required: true,
                        message: "Please enter your password"
                    }
                ]}>
                    <Input.Password type="password" prefix={<LockOutlined />} placeholder='password' />
                </Form.Item>
                {isLogin || (
                    <Form.Item name="confirmPassword" rules={[
                        {
                            required: true,
                            message: "Please repeat your password"
                        }
                    ]}>
                        <Input.Password type="password" prefix={<LockOutlined />} placeholder='confirm Password' />
                    </Form.Item>
                )}
                <Form.Item>
                    <Button htmlType='submit' typeof='primary'>
                        {isLogin ? "Log in" : "Join" }
                    </Button>
                    <span style = {{margin: "0 10px 0px 20px"}}>Or</span>
                    <Button type= "link" onClick = {switchMode}>
                        {isLogin ? "Register Now": "have a account?"}
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </Layout>
  )
}

export default AuthForm;
