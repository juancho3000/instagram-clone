import React from "react";
import ProfileName from "./profile-name";
import LikeSection from './like-section';
import OptionsList from './Options';
import Interactions from './interactions';
import ProjectHeader from "./project-header";
import { BsBookmark } from "react-icons/bs";
import Example from '../photos-publication/example-1.jpg';

function MainFeed () {
    return(
    <div>
    <div>
     <ProjectHeader/>
      </div>
      <div>
      <ProfileName/>
      </div>
      <div className='publication-image'>
       <img src={Example} className='main-publication' alt='this'/>
      </div>
      <section className="like-icons">
       <LikeSection/>
      </section>
      <div className='book-mark'>
      <span className='like-bookMark'>
          <BsBookmark size="30px"/>
        </span>
      </div>
      <div className="text-interaction">
        <Interactions/>
      </div>
     <div>
      <OptionsList/>
     </div>
    </div>
    );
}
export default MainFeed;