import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}
                                                      id={post.id}/>);

    let newPostElement = React.createRef();

    let AddPost = () => {
        let action = addPostActionCreator();

        props.dispatch(action);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);

        props.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={()} => {}
        />
    );
}

export default MyPostsContainer;