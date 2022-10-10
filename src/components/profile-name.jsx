import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function ProfileName () {
    const handleName = (e) =>{
        e.preventDefault();
        console.log('word has been clicked')
    }
    return(
        <div className='preview-profile'>
        <span className='dot'></span>
        <h3 className='profileName' onClick={(handleName)}>
          profileName
        </h3>
        <span className='three-dots'>
        <BsThreeDotsVertical/>
        </span>
      </div>
    );
}
export default ProfileName;