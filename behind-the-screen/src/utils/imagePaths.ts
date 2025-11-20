// Image path utilities for consistent asset management

/**
 * Base path for all images in the public directory
 * Testing with simple path first
 */
const IMAGE_BASE_PATH = `${import.meta.env.BASE_URL}images`;

/**
 * Helper function to create consistent image paths
 * @param category - The image category/folder (e.g., 'chapter1', 'ui', 'backgrounds')
 * @param filename - The image filename with extension
 * @returns Complete image path
 */
export const getImagePath = (category: string, filename: string): string => {
  return `${IMAGE_BASE_PATH}/${category}/${filename}`;
};

/**
 * Predefined image categories for better organization
 */
export const IMAGE_CATEGORIES = {
  CHAPTER_1: 'chapter1',
  CHAPTER_2: 'chapter2',
  CHAPTER_3: 'chapter3',
  CHAPTER_4: 'chapter4',
  CHAPTER_5: 'chapter5',
  SHARED: 'shared',
  UI: 'ui',
  BACKGROUNDS: 'backgrounds',
  CHARACTERS: 'characters',
  EXAMPLE: 'example',
} as const;

/**
 * Quick access functions for common image paths
 */
export const imagePaths = {
  // Chapter-specific images
  chapter1: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHAPTER_1, filename),
  chapter2: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHAPTER_2, filename),
  chapter3: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHAPTER_3, filename),
  chapter4: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHAPTER_4, filename),
  chapter5: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHAPTER_5, filename),
  
  // Shared/common images
  shared: (filename: string) => getImagePath(IMAGE_CATEGORIES.SHARED, filename),
  ui: (filename: string) => getImagePath(IMAGE_CATEGORIES.UI, filename),
  backgrounds: (filename: string) => getImagePath(IMAGE_CATEGORIES.BACKGROUNDS, filename),
  characters: (filename: string) => getImagePath(IMAGE_CATEGORIES.CHARACTERS, filename),
  
  // Example images
  example: (filename: string) => getImagePath(IMAGE_CATEGORIES.EXAMPLE, filename),
};

/**
 * Type-safe image path builder with validation
 * @param category - Image category
 * @param filename - Image filename
 * @param validateExists - Optional: check if file exists (dev mode only)
 * @returns Image path or error
 */
export const buildImagePath = (
  category: keyof typeof IMAGE_CATEGORIES,
  filename: string,
  validateExists = false
): string => {
  const path = getImagePath(IMAGE_CATEGORIES[category], filename);
  
  // In development, you could add validation here
  if (validateExists && import.meta.env.DEV) {
    // This would require additional setup for file existence checking
    console.log(`Using image path: ${path}`);
  }
  
  return path;
};

// Example usage patterns:
/*

// Method 1: Direct helper functions
const heroImage = imagePaths.chapter1('hero.jpg');
// Result: '/images/chapter1/hero.jpg'

// Method 2: Type-safe builder
const backgroundImage = buildImagePath('BACKGROUNDS', 'forest.jpg');
// Result: '/images/backgrounds/forest.jpg'

// Method 3: Manual construction
const customImage = getImagePath('custom-folder', 'image.png');
// Result: '/images/custom-folder/image.png'

*/

export default imagePaths;
