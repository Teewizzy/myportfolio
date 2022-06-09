import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://www.facebook.com/henry.tope'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/djteewizzy/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/topeajayi1995'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Tope Ajayi</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "Front-end Web Developer 😎",700,
                                "Social Media Manager 🌐",700,
                                "Digital Marketing 📱",700,
                                "Word Press Developer 💻",700,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building website with Front end operations.
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me{" "}
                        </button>
                        <a href ='topeajayiCV.pdf' download='topeajayiCV.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;