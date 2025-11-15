// Reusable component for grid-based story sections

import React from 'react';
import type { GridCellContent } from '../utils/storyUtils';
import { getGridCellClasses, getGridCellStyles } from '../utils/storyUtils';

interface GridStorySectionProps {
  /** Array of content to display in the grid */
  content: GridCellContent[];
  /** Additional CSS classes for the section */
  className?: string;
  /** Background style variant */
  variant?: 'odd' | 'even' | 'custom';
  /** Custom background style */
  style?: React.CSSProperties;
  /** Animation delay for the section */
  animationDelay?: string;
}

/**
 * Grid-based story section component that allows flexible content positioning
 */
export const GridStorySection: React.FC<GridStorySectionProps> = ({
  content,
  className = '',
  variant = 'odd',
  style,
  animationDelay,
}) => {
  const sectionClasses = [
    'story-section-grid',
    variant === 'odd' ? 'section-odd' : '',
    variant === 'even' ? 'section-even' : '',
    className,
  ].filter(Boolean).join(' ');

  const sectionStyle = {
    ...style,
    ...(animationDelay && { animationDelay }),
  };

  return (
    <div className={sectionClasses} style={sectionStyle}>
      {content.map((cell, index) => {
        const cellClasses = getGridCellClasses(cell).join(' ');
        const cellStyles = getGridCellStyles(cell);

        return (
          <div
            key={`${cell.position}-${index}`}
            className={cellClasses}
            style={cellStyles}
          >
            {cell.type === 'text' ? (
              <div className="grid-cell-text">
                {cell.content}
              </div>
            ) : (
              <img
                src={cell.content}
                alt=""
                className="grid-cell-image"
                loading="lazy"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GridStorySection;
