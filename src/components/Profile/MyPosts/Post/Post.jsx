import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(

         <div className={classes.item}>
             <img src='https://million-wallpapers.ru/wallpapers/5/51/424703866779568.jpg'/>
             {props.message}
             <div>
                 <span>Like</span>
                 <span>{props.likeCounts}</span>
             </div>
         </div>
    );
}

export default Post;