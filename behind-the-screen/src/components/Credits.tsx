import React from 'react';
import '../Story.css';
import GridStorySection from './GridStorySection';
import { createGridCell } from '../utils/storyUtils';

const Credits: React.FC = () => {
  return (
    <>
      <GridStorySection
        content={[
          createGridCell(
            'top-center',
            'text',
            "CREDITS",
            {
              fontSize: '5xl',
              textAlign: 'center',
              verticalAlign: 'middle',
            }
          ),
          createGridCell(
            'middle-center',
            'text',
            '<strong>Story:</strong>\nVishnu Eskew\n\n<strong>Adaptation:</strong>\nSabrina Hu\nDokyun Kim\nElin O\'Neill\n\n<strong>Acknowledgements:</strong>\nAndrew Clark M.D.',
            {
              fontSize: '3xl',
              textAlign: 'center',
              verticalAlign: 'middle',
              allowHTML: true,
            }
          ),
        ]}
      />
      <GridStorySection
        content={[
          createGridCell(
            'top-center',
            'text',
            'Author\'s Note',
            {
              fontSize: '5xl',
              textAlign: 'center',
              verticalAlign: 'middle',
              allowHTML: true,
            }
          ),
          createGridCell(
            'middle-center',
            'text',
            'Although this story ends well, not all do. There have been multiple real-world cases where an AI chatbot influenced people to take extreme and irreversible decisions. As technology becomes increasingly woven into our lives, we must stay aware of our growing reliance on AI chatbots and the subtle ways they shape our behavior and thinking.',
            {
              fontSize: '3xl',
              textAlign: 'center',
              verticalAlign: 'middle',
            }
          )
        ]}
      />
    </>
  );
};

export default Credits;
