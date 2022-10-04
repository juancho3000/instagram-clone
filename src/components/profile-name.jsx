import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function ProfileName () {
    //const [showName, setShowName] = useState(false);
    return(
        <div className='preview-profile'>
        <span className='dot'></span>
        <h3 className='profileName'>
          profileName
        </h3>
        <span className='three-dots'>
        <BsThreeDotsVertical/>
        </span>
      </div>
    );
}
export default ProfileName;