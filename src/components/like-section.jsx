import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { BiPaperPlane } from "react-icons/bi";

function LikeSection (){
    return(
        <div className='like-comment'>
        <span className='like-heart'>
        <AiOutlineHeart size="30px"/>
        </span>
        <span className='like-bubble'>
        <HiOutlineChat size="30px"/>
        </span>
        <span className='like-arrow'>
        <BiPaperPlane size="30px"/>
        </span>
      </div>
    );
}
export default LikeSection;