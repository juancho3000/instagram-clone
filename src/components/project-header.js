import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

function ProjectHeader () {
    return(
      <section className='header'>
      <AiOutlineCamera className='camera'/>
      <p className='title'>Instagram</p>
      <div className="direct-message-style">
      <span className="direct-message">
      <BiPaperPlane size="30px"/>
      </span>
      </div>
      </section>
    );
}
export default ProjectHeader;