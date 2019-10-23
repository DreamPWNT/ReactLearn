import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.slidesharecdn.com/ss_thumbnails/color-160728154425-thumbnail-4.jpg?cb=1469721249"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;