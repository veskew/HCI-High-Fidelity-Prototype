// Utility functions for the story application

/**
 * Extracts chapter number from title text
 * @param titleText - The text content of a chapter title
 * @returns The chapter number or null if not found
 */
export const extractChapterNumber = (titleText: string): number | null => {
  const chapterMatch = titleText.match(/Chapter (\d+):/);
  return chapterMatch ? parseInt(chapterMatch[1], 10) : null;
};

/**
 * Gets the color for a chapter based on whether it's active
 * @param isActive - Whether the chapter is currently active
 * @returns The background color for the chapter
 */
export const getChapterColor = (isActive: boolean): string => {
  return isActive ? '#fc8181' : '#667eea';
};

/**
 * Validates if a chapter number is within valid range
 * @param chapterNumber - The chapter number to validate
 * @param totalChapters - Total number of chapters
 * @returns Whether the chapter number is valid
 */
export const isValidChapterNumber = (chapterNumber: number, totalChapters: number): boolean => {
  return chapterNumber >= 1 && chapterNumber <= totalChapters;
};

/**
 * Handles fullscreen API errors gracefully
 * @param error - The error object
 * @param operation - The operation that failed (enter/exit)
 */
export const handleFullscreenError = (error: any, operation: 'enter' | 'exit'): void => {
  console.log(`Error attempting to ${operation} fullscreen:`, error);
  // Could be extended to show user-friendly error messages
};

/**
 * Debounces a function call
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns The debounced function
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Grid positioning utilities

export type GridPosition = 
  | 'top-left' | 'top-center' | 'top-right'
  | 'middle-left' | 'middle-center' | 'middle-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export type ContentType = 'text' | 'image';

export type TextAlignment = 'left' | 'center' | 'right';
export type VerticalAlignment = 'top' | 'middle' | 'bottom';

export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'custom';

export interface GridCellContent {
  position: GridPosition;
  type: ContentType;
  content: string; // Text content or image URL
  fontSize?: FontSize;
  customFontSize?: string; // For custom font sizes (e.g., "1.2rem")
  textAlign?: TextAlignment;
  verticalAlign?: VerticalAlignment;
  className?: string; // Additional CSS classes
}

/**
 * Converts grid position to CSS class name
 * @param position - The grid position
 * @returns The corresponding CSS class name
 */
export const getGridPositionClass = (position: GridPosition): string => {
  return `grid-${position.replace('-', '-')}`;
};

/**
 * Generates CSS classes for a grid cell
 * @param content - The grid cell content configuration
 * @returns Array of CSS class names
 */
export const getGridCellClasses = (content: GridCellContent): string[] => {
  const classes = ['grid-cell'];
  
  // Add position class
  classes.push(getGridPositionClass(content.position));
  
  // Add text alignment
  if (content.textAlign) {
    classes.push(`text-${content.textAlign}`);
  }
  
  // Add vertical alignment
  if (content.verticalAlign) {
    classes.push(`align-${content.verticalAlign}`);
  }
  
  // Add font size
  if (content.fontSize) {
    classes.push(`text-${content.fontSize}`);
  }
  
  // Add content type
  classes.push(`grid-cell-${content.type}`);
  
  // Add custom classes
  if (content.className) {
    classes.push(...content.className.split(' '));
  }
  
  return classes;
};

/**
 * Generates inline styles for custom font sizes
 * @param content - The grid cell content configuration
 * @returns CSS style object or undefined
 */
export const getGridCellStyles = (content: GridCellContent): React.CSSProperties | undefined => {
  if (content.fontSize === 'custom' && content.customFontSize) {
    return {
      '--custom-font-size': content.customFontSize,
      fontSize: 'var(--custom-font-size)',
    } as React.CSSProperties;
  }
  return undefined;
};

/**
 * Creates a grid cell element configuration
 * @param position - Where to place the content
 * @param type - Type of content (text or image)
 * @param content - The actual content
 * @param options - Additional styling options
 * @returns Grid cell content configuration
 */
export const createGridCell = (
  position: GridPosition,
  type: ContentType,
  content: string,
  options: Partial<Omit<GridCellContent, 'position' | 'type' | 'content'>> = {}
): GridCellContent => {
  return {
    position,
    type,
    content,
    fontSize: options.fontSize || 'base',
    textAlign: options.textAlign || 'center',
    verticalAlign: options.verticalAlign || 'middle',
    ...options,
  };
};
