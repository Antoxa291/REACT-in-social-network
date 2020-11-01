import React from 'react';
import reactimg from '../react-img.jpg';
import profileimg from '../profile-img.jpg';


function Profile() {
    return (
        <div className='profile'>
        <div className='profile__bachground'>
        <img  src={reactimg} alt="react-img"></img>
    </div>
    <div className='profile'> 
        <img className='profile__photo' src={profileimg} alt="profile-img"></img>
        <div class="profile__discription"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
    <div className=''>New post</div>
    <div className=''>Add post</div>
    <div className=''>Last post
    <div>Prevpost 1</div> 
    <div>Prevpost 2</div></div>
</div>);
}

export default Profile;

