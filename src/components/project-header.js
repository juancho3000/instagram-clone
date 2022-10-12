import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";

function ProjectHeader () {
    return(
      <div>
      <section className='header'>
      <AiOutlineCamera className='camera'/>
      <p className='title'>Instagram</p>
      </section>
      <div className="direct-message-style">
      <span className="direct-message">
      <BiPaperPlane size="30px"/>
      </span>
      </div>
      </div>
    );
}
export default ProjectHeader;