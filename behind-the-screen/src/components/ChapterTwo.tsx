import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';
import imagePaths from '../utils/imagePaths';

const ChapterTwo: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 2: Erosion
      </h1>
      <div className="chapter-content">

        <GridStorySection
          content={[
            createGridCell(
              'top-center',
              'text',
              "“I had a really awkward interaction with a friend today... I really hope I didn’t ruin anything.”",
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'middle-center',
              'text',
              "“Maybe I’ll try talking to the AI about this”",
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <div className='visual-scene' style={{
          backgroundImage: `url(${imagePaths.chapter2('chat-log-1.png')})`,
          backgroundSize: 'contain'
        }}>
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              "“This doesn’t feel right” Joshy thinks. “Can GPTalk really help me?”",
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <GridStorySection
          content={[
            createGridCell(
              'top-center',
              'image',
              imagePaths.chapter2('chat-log-2.png')
            ),
            createGridCell(
              'middle-center',
              'text',
              "“Well... at least AI cares.”",
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

export default ChapterTwo;
