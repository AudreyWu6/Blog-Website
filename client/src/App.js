import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout} from "antd";

import Home from "./components/Home";
import styles from "./styles";
import { AppBar } from "./components/AppBar/AppBar";
import AuthForm from "./components/AuthForm";


const { Footer } = Layout;

// const App = () => {
//     return (
//         <Layout style={styles.layout}>
//             <Header style={styles.header}>
//                 <div>
//                 <Image style = {styles.image} width = "50px" preview = "false" src = {Logo}/>
//                 </div>
//                 &nbsp;
//                 <div style={styles.title}>
//                     <Title level={2} style={{ margin: 0, color: "white" }}>Instaverse</Title>
//                 </div>
//             </Header>
//             <Home/>
//             <Footer style={styles.footer}> 2024 Instaverse </Footer>
//         </Layout>
//     )
// }
const App = () => {
    return (
        <BrowserRouter>
            <Layout style={styles.layout}>
                <AppBar/>
                <Routes>
                    <Route path= "/" element = {<Home/>}/>
                    <Route path= "/authform" element = {<AuthForm/>}/>
                </Routes>
                <Footer style={styles.footer}> 2024 Instaverse </Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default App;