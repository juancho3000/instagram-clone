import './App.css';
import { AiOutlineCamera } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";
import { BiPaperPlane } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Example from './photos-publication/example-1.jpg';


function App() {
  return (
    <div className="App">
      <section className='header'>
      <AiOutlineCamera className='camera'/>
      <p className='title'>Instagram</p>
      </section>
      <div className='preview-profile'>
        <span className='dot'></span>
        <h3 className='profileName'>
          profileName
        </h3>
        <span className='three-dots'>
        <BsThreeDotsVertical/>
        </span>
      </div>
      <div className='publication-image'>
       <img src={Example} className='main-publication' alt='this'/>
      </div>
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
        <span className='like-bookMark'>
          <BsBookmark size="30px"/>
        </span>
      </div>
      <div className='interaction-count'>
        <section className='info'>
        <p>Liked by Friend1, Friend2 and 20 other friends, #hastags</p>
        <p className='see-comments'>view comments here</p>
        <p>2 weeks ago</p>
        </section>
      </div>
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
    </div>
  );
}

export default App;
