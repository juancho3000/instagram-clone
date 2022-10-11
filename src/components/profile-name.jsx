import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Navigate } from 'react-router-dom';

function ProfileName () {
    const [goToProfile, setGoToProfile] = useState(false);
    console.log("Entering profile has been opened")
    if (goToProfile){
    return <Navigate to="/Entering-profile"/>
}
    return(
        <div className='preview-profile'>
        <span className='dot'></span>
        <h3 className='profileName' onClick={()=> {setGoToProfile(true)}}>
          profileName
        </h3>
        <span className='three-dots'>
        <BsThreeDotsVertical/>
        </span>
      </div>
    );
}
export default ProfileName;