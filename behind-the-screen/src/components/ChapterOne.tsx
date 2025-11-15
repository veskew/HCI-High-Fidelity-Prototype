import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';
import { imagePaths } from '../utils/imagePaths';

const ChapterOne: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 1: Companion
      </h1>
      
      <div className="chapter-content">

        {/* Visual Scene Example with Multiple Notifications */}
        <div className="visual-scene scene-workspace">
          <div className="notification-bubble notification-top-center">
            It's a Saturday afternoon and Joshy is sitting down starting his homework.
          </div>
        </div>

        <div className="visual-scene scene-workspace">
          <div className="notification-bubble notification-top-left">
            "Man, I have so much work to<br />
            do this weekend. I had no<br />
            time during the week to do<br />
            any of my homework."<br />
            <br />
            Joshy remembered some<br />
            of his friends talking about<br />
            how AI is really good at<br />
            giving homework help.
          </div>
          <div className="notification-bubble notification-bottom-right">
            “I guess I’ll give it a try.”
          </div>
        </div>

        <div className='visual-scene scene-workspace'>
            replace with chatgpt screen
        </div>

        {/* Replaced the plain story-section with a grid-based story section */}
        <GridStorySection
          content={[
            createGridCell(
              'top-left',
              'text',
              'Joshy finished his homework twice as fast as he usually does.',
              {
                fontSize: '3xl',
                textAlign: 'left',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'middle-center',
              'text',
              '"Wow, it explained it so much better than any of my teachers!" he thought to himself.',
              {
                fontSize: '3xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'bottom-right',
              'text',
              '"I wonder if it can help me with other things too?"',
              {
                fontSize: '3xl',
                textAlign: 'left',
                verticalAlign: 'middle',
              }
            )
          ]}
          variant="odd"
          animationDelay="0.15s"
        />

        <div className='visual-scene scene-workspace'>
            replace with chatgpt screen
        </div>

        <div className='visual-scene scene-workspace'>
            <div className='notification-bubble notification-bottom-center'>
                "Well, it was worth a try..." Joshy muttered as he closed his laptop.
            </div>
        </div>
      </div>
    </>
  );
};

export default ChapterOne;
