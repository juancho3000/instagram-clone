import React from "react";
import { BsJustify } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BsPlusSquare } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Example from '../photos-publication/example-1.jpg';

function EnteringProfile () {
    return(
        <div className="nameHere">
            <section className="head-section">
             <p>YourAccountName</p>
             <BsJustify size="30px"/>
            </section>
            <div className="profile-details">
            <span className='dot-2'></span>
            <section className="profile-info">
            <p>92 posts</p>
            <p>840 followers</p>
            <p>608 following</p>
            </section>
            </div>
            <div className="edit-profile-button">
             <button type="button" className="boton">Edit profile</button>
            </div>
            <div className="stories-added">
                <section className="stories-record">
                <span className='dot-3'>
                <p className="stories-text">new</p>
                </span>
                <span className='dot-3'>
                <p className="stories-text">storie1</p>
                </span>
                <span className='dot-3'>
                <p className="stories-text">storie2</p>
                </span>
                </section>
            </div>
            <div className="publications">
                    <span className="cell-pic"><AiOutlineTable size="25px"/>
                    </span>
                    <span className="person-pic"><BsPersonSquare size="25px"/>
                    </span>
            </div>
            <div className="profile-images">
            <div><img src={Example} className='main-publication' alt='this'/></div>
            <div><img src={Example} className='main-publication' alt='this'/></div>
            <div><img src={Example} className='main-publication' alt='this'/></div>
            <div><img src={Example} className='main-publication' alt='this'/></div>
            <div><img src={Example} className='main-publication' alt='this'/></div>
            <div><img src={Example} className='main-publication' alt='this'/></div>
            </div>
            <div className="profile-options">
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
export default EnteringProfile;