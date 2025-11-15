// Constants and configuration for the story application

/**
 * Application configuration constants
 */
export const APP_CONFIG = {
  TOTAL_CHAPTERS: 5,
  CHAPTER_OBSERVER_DELAY: 100, // ms to wait before observing chapter titles
  CHAPTER_OBSERVER_ROOT_MARGIN: '-20% 0px -20% 0px',
  CHAPTER_OBSERVER_THRESHOLD: 0.5,
} as const;

/**
 * Chapter colors
 */
export const CHAPTER_COLORS = {
  ACTIVE: '#fc8181',
  INACTIVE: '#667eea',
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  AGE_VERIFIED: 'ageVerified',
} as const;

/**
 * CSS class names used in components
 */
export const CSS_CLASSES = {
  CHAPTER_TITLE: 'chapter-title',
  SIDEBAR_ITEM: 'sidebar-item',
  SIDEBAR_ACTIVE: 'active',
  FULLSCREEN_TOGGLE: 'fullscreen-toggle',
  FULLSCREEN_ACTIVE: 'in-fullscreen',
} as const;

/**
 * Chapter data structure
 */
export const CHAPTERS = [
  { id: 1, title: 'Chapter 1: Beginnings' },
  { id: 2, title: 'Chapter 2: Erosion' },
  { id: 3, title: 'Chapter 3: Discovery' },
  { id: 4, title: 'Chapter 4: Transformation' },
  { id: 5, title: 'Chapter 5: Resolution' },
] as const;

/**
 * Grid system constants
 */
export const GRID_CONFIG = {
  POSITIONS: [
    'top-left', 'top-center', 'top-right',
    'middle-left', 'middle-center', 'middle-right',
    'bottom-left', 'bottom-center', 'bottom-right'
  ] as const,
  
  FONT_SIZES: [
    'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'custom'
  ] as const,
  
  TEXT_ALIGNMENTS: ['left', 'center', 'right'] as const,
  
  VERTICAL_ALIGNMENTS: ['top', 'middle', 'bottom'] as const,
  
  CONTENT_TYPES: ['text', 'image'] as const,
} as const;
