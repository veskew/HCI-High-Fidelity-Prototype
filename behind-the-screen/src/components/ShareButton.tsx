import React, { useState } from 'react';
import './ShareButton.css';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';

const ShareButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div>
      <button className="share-button" onClick={togglePopup}>
        Share
      </button>
      {showPopup && (
        <div className="share-popup">
          <div className="share-popup-content">
            <h3>Share the story</h3>
            <div className="social-links">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
                Facebook
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
                Twitter
              </a>
              <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
                Instagram
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="copy-link">
              <input type="text" value={window.location.href} readOnly />
              <button onClick={copyLink}>Copy</button>
            </div>
            <span className="close-share-popup" onClick={togglePopup}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
