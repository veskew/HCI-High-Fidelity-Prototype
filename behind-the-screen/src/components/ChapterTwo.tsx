import React from 'react';
import '../Story.css';

const ChapterTwo: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 2: Erosion
      </h1>
      <div className="chapter-content">

        <div className="story-section">
            <p>“I had a really awkward interaction
                with a friend today. I really hope I 
                didn’t ruin anything.”
            </p>
            <p>
                “Maybe I’ll try talking to the AI about this”
            </p>
        </div>

        <div className='visual-scene scene-workspace'>
            replace with chatgpt screen
        </div>

        <div className="story-section">
            <p>
                “This doesn’t feel right” Joshy thinks. <br />
                “Can GPTalk really help me?
            </p>
        </div>

        <div className='story-section'>
            <p>"Well, at least AI cares."</p>
        </div>

      </div>
    </>
  );
};

export default ChapterTwo;
