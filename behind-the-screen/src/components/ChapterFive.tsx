import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';
import imagePaths from '../utils/imagePaths';

const ChapterFive: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 5: Reunion
      </h1>
      
      <div className="chapter-content">

        <div className='visual-scene' style={{
          backgroundImage: `url(${imagePaths.chapter5('phone-dark.png')})`,
          backgroundSize: 'contain'
        }}>
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

        <div className='visual-scene' style={{
          backgroundImage: `url(${imagePaths.chapter5('parents.png')})`,
          backgroundSize: 'contain'
        }}>
        </div>

        <div className='visual-scene' style={{
          backgroundImage: `url(${imagePaths.chapter5('parents.png')})`,
          backgroundSize: 'contain'
        }}>
            <div className='notification-bubble notification-center'>
                "Mom, Dad? Can we talk?"
            </div>  
        </div>
      </div>
    </>
  );
};

export default ChapterFive;
