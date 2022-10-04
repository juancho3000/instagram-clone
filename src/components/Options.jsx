import React from "react";
import { BiHome } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

function OptionsList () {
    return(
        <div className='options-list'>
        <span className='list-house'>
          <BiHome size="30px"/>
        </span>
        <span className='list-search'>
          <BsSearch size="30px"/>
        </span>
        <span className='list-plus'>
          <BsPlusSquare size="30px"/>
        </span>
        <span className='list-heart'>
          <BsSuitHeart size="30px"/>
        </span>
        <span className='list-profile'>
        <BsPerson size="30px"/>
        </span>
      </div>
    );
}
export default OptionsList;