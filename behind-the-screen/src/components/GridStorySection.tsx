// Reusable component for grid-based story sections

import React from 'react';
import type { GridCellContent, FontFamily } from '../utils/storyUtils';
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
  /** Default font family for all text cells in this section */
  fontFamily?: FontFamily;
  /** Custom font family string (when fontFamily is 'custom') */
  customFontFamily?: string;
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
  fontFamily,
  customFontFamily,
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
        
        // Apply section-wide font family if cell doesn't have its own
        const cellWithSectionFont = {
          ...cell,
          fontFamily: cell.fontFamily || fontFamily,
          customFontFamily: cell.customFontFamily || (fontFamily === 'custom' ? customFontFamily : undefined),
        };
        
        const cellStyles = getGridCellStyles(cellWithSectionFont);

        return (
          <div
            key={`${cell.position}-${index}`}
            className={cellClasses}
            style={cellStyles}
          >
            {cell.type === 'text' ? (
              cell.allowHTML ? (
                <div 
                  className="grid-cell-text"
                  dangerouslySetInnerHTML={{ 
                    __html: cell.content.replace(/\n/g, '<br />') 
                  }}
                />
              ) : (
                <div className="grid-cell-text">
                  {cell.content}
                </div>
              )
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
