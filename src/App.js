import './App.css';
import ProfileName from './components/profile-name';
import LikeSection from './components/like-section';
import OptionsList from './components/Options';
import Interactions from './components/interactions';
import { AiOutlineCamera } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import Example from './photos-publication/example-1.jpg';
import EnteringProfile from './components/Entering-profile';

function App () {
  return (
    <div className="App">
      <section className='header'>
      <AiOutlineCamera className='camera'/>
      <p className='title'>Instagram</p>
      </section>
      <div>
      <ProfileName/>
      </div>
      <div className='publication-image'>
       <img src={Example} className='main-publication' alt='this'/>
      </div>
      <div>
       <LikeSection/>
      </div>
      <div className='book-mark'>
      <span className='like-bookMark'>
          <BsBookmark size="30px"/>
        </span>
      </div>
      <div>
        <Interactions/>
      </div>
     <div>
      <OptionsList/>
     </div>
     <div>
      <EnteringProfile/>
     </div>
    </div>
  );
}
export default App;
