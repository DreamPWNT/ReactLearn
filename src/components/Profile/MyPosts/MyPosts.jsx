import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";

const MyPosts = (props) => {

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
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;