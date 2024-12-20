import React, { useState, useEffect }from 'react';
import {Link, useNavigate, useLocation } from "react-router-dom";
import { Layout, Image, Typography, Button, Avatar } from "antd";
import Logo from "../../images/instaverse.png";
import { useDispatch } from 'react-redux';
import styles from "./styles";
import { LOGOUT } from '../../constants/actionTypes';
import { jwtDecode } from 'jwt-decode';


const { Title } = Typography;
const { Header } = Layout;
export const AppBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser ] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
        const token = user?.token;
        if(token){
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
        }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])

    const logout = () => {
        dispatch({type: LOGOUT});
        navigate("/authform");
        setUser(null);
    }

    return (
        <Header style={styles.header}>
            <Link to="/">
                <div style = {styles.homelink}>
                    <Image style = {styles.image} width = "50px" preview = "false" src = {Logo}/>
                    &nbsp;
                    {/* <div style={styles.title}>
                        <Title level={2} style={{ margin: 0, color: "white" }}>Instaverse</Title>
                    </div> */}
                    <Title  style={styles.title}>Instaverse</Title>
                </div>
            </Link>
            {!user ? (
                <Link to="/authform">
                    <Button htmlType='= "button' style={styles.login}>
                        Log in
                    </Button>
                </Link> 
            ):(
                <div style = {styles.userInfo}>
                    <Avatar styles = {styles.avatar} alt='username' size="larger">
                        {user?.result?.username?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Title style={styles.title} level = {4}>
                        {user?.result?.username}
                    </Title>
                    <Button onClick={logout} htmlType='button'>
                        Log out
                    </Button>
                </div>
            )}
        </Header>
    )
}
