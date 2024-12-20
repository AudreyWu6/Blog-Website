// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import StoryForm from "../StoryForm";
// import StoryList from "../StoryList";
// import {Layout} from "antd";
// import styles from "./styles";
// import { getStories } from "../../actions/stories";

// const { Sider, Content } = Layout;

// const Home = () => {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getStories());
//     }, [dispatch]);

//     return (
//        <Layout>
//         <Sider width = {400} style= { styles.sider }>
//             <StoryForm />
//         </Sider>
//         <Content style= { styles.content }>
//             <StoryList />
//         </Content>
//        </Layout>
//     )
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import {Layout} from "antd";
import styles from "./styles";
import { getStories } from "../../actions/stories";

const { Sider, Content } = Layout;

const Home = () => {
    const [selectedId, setSelectedId ] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    return (
       <Layout>
        <Sider width = {400} style= { styles.sider }>
            <StoryForm selectedId = {selectedId} setSelectedId = {setSelectedId} />
        </Sider>
        <Content style= { styles.content }>
            <StoryList setSelectedId = {setSelectedId}/>
        </Content>
       </Layout>
    )
};

export default Home;