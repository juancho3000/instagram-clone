import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
//import { Navigate } from 'react-router-dom'
import EnteringProfile from "./Entering-profile";

function ProfileName () {
    const [goToProfile, setGoToProfile] = useState(false);

if (goToProfile){
    return <EnteringProfile/>
}
console.log("Entering profile has been opened")

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