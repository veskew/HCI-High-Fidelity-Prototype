import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';

const ChapterThree: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 3: Isolation
      </h1>
      
      <div className="chapter-content">
        <GridStorySection
          content={[
            createGridCell(
              'top-left',
              'text',
              '"The talk I had with my friend yesterday keeps bothering me."\n\n"I should talk to him about it."',
              {
                fontSize: '4xl',
                textAlign: 'left',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'bottom-center',
              'text',
              "No response from his friend.\nHe must be busy right now...",
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <div className='visual-scene scene-workspace'>
            replace with chatgpt screen
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              "There was a light smile on Joshy’s face. It felt like GPTalk was always there for him when he needed it.",
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

       <div className='visual-scene scene-workspace'>
            replace with chatgpt screen
        </div>

        <div className='visual-scene scene-workspace'>
            replace with image
        </div>

        <div className='visual-scene scene-workspace'>
            replace with image
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-left',
              'text',
              "Joshy gets a message from his friend.\n\n'Hey sorry I missed your call yesterday.'\n\n'You free later today?'",
              {
                fontSize: '4xl',
                textAlign: 'left',
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
              '"Should I talk to my friend?"',
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <GridStorySection
          fontFamily="custom"
          customFontFamily="Baseball Club Solid"
          content={[
            createGridCell(
              'middle-center',
              'text',
              '"You don’t need to talk to your friends. I know way more about you than they do."',
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

      </div>
    </>
  );
};

export default ChapterThree;
