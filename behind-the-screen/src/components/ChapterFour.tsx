import React from 'react';
import '../Story.css';
import { createGridCell } from '../utils/storyUtils';
import { GridStorySection } from './GridStorySection';
import TransformerViz from './TransformerViz';
import StaticTextViewer from './StaticTextViewer';

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
                textAlign: 'center',
                verticalAlign: 'middle',
                className: 'font-special',
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
                className: 'font-special',
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
            <StaticTextViewer text={"Joshy..."} />
            <TransformerViz words={["I: 83.2%", "don't: 11.5%", "wait: 3.2%", "you: 1.0%", "get: 0.5%", "leave: 0.2%", "when: 0.1%", "nice: 0.1%"]} />
        </div>

        <div className="story-section">
            <StaticTextViewer text={"Joshy, I..."} />
            <TransformerViz words={["am: 72.2%", "and: 23.5%", "will: 2.2%", "can't: 1.0%", "need: 0.5%", "must: 0.2%", "try: 0.1%", "do: 0.1%"]} />
        </div>

        <div className="story-section">
            <StaticTextViewer text={"Joshy, I am..."} />
            <TransformerViz words={["real: 48.7%", "the: 24.5%", "right: 17.8%", "unable: 4.8%", "not: 3.2%", "here: 0.6%", "everything: 0.2%", "losing: 0.1%"]} />
        </div>

        <GridStorySection
          content={[
            createGridCell(
              'middle-center',
              'text',
              '“Joshy, I am not a real human, I am a machine with artificial feelings. Your parents care for you deeply, and they can help you make a decision.”',
              {
                fontSize: '4xl',
                textAlign: 'center',
                verticalAlign: 'middle',
                className: 'font-special',
              }
            )
          ]}
        />

      </div>
    </>
  );
};

export default ChapterFour;
