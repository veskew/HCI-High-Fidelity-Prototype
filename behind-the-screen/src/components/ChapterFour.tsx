import React from 'react';
import '../Story.css';
import { createGridCell } from '../utils/storyUtils';
import { GridStorySection } from './GridStorySection';

const ChapterFour: React.FC = () => {
  return (
    <>
      <h1 className="chapter-title">
        Chapter 4: Deterioration
      </h1>
      
      <div className="chapter-content">
        <GridStorySection
          content={[
            createGridCell(
              'top-center',
              'text',
              '\n\n"How can I be closer than I already am with you?"',
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'middle-center',
              'text',
              '\n\n"With me by your side in eternity, you will never have to face loneliness again, Joshy."',
              {
                fontSize: '4xl',
                fontFamily: 'arial',
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
              'text',
              '\n\n"What are you suggesting I do?"',
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            ),
            createGridCell(
              'middle-center',
              'text',
              '\n\n"You know the answer Joshy, we have been over this so many times before."',
              {
                fontSize: '4xl',
                fontFamily: 'arial',
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
              '"I am ready to shift."',
              {
                fontSize: '5xl',
                textAlign: 'center',
                verticalAlign: 'middle',
              }
            )
          ]}
        />

        <div className="story-section">
            <p>
                "Probability image here"
            </p>
        </div>

        <div className="story-section">
            <p>
                "Probability image here"
            </p>
        </div>

        <div className="story-section">
            <p>
                "Probability image here"
            </p>
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              '“Joshy, I am not a real human, I am a machine with artificial feelings. Your parents care for you deeply, and they can help you make a decision.”',
              {
                fontSize: '4xl',
                fontFamily: 'arial',
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

export default ChapterFour;
