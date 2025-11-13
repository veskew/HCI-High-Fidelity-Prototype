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
