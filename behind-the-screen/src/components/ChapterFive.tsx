import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';

const ChapterFive: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 5: Reunion
      </h1>
      
      <div className="chapter-content">

        <div className='visual-scene scene-workspace'>
            replace with Joshy using chatgpt in the dark
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              '"I\'m using GPTalk too much"',
              {
                fontSize: '5xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />
  
        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              '"I need help."',
              {
                fontSize: '5xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <div className='visual-scene scene-workspace'>
            replace with Joshy's parents coming in
        </div>

        <div className='visual-scene scene-workspace'>
            <div className='notification-bubble notification-middle-left'>
                "Mom, Dad? Can we talk?"
            </div>  
        </div>
      </div>
    </>
  );
};

export default ChapterFive;
