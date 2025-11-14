// Custom hooks for the story application

import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to manage fullscreen functionality
 */
export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.log('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.log('Error attempting to exit fullscreen:', err);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return { isFullscreen, toggleFullscreen };
};

/**
 * Custom hook to manage age verification
 */
export const useAgeVerification = () => {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem('ageVerified');
    if (isAgeVerified === 'true') {
      setAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = () => {
    setAgeVerified(true);
    localStorage.setItem('ageVerified', 'true');
  };

  return { ageVerified, handleAgeVerification };
};

/**
 * Custom hook to manage chapter navigation and tracking
 */
export const useChapterNavigation = (totalChapters: number = 5) => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const storyContainerRef = useRef<HTMLDivElement | null>(null);
  
  const chapterRefs = Array.from({ length: totalChapters }, () => 
    useRef<HTMLDivElement | null>(null)
  );

  const scrollToChapter = (index: number) => {
    if (chapterRefs[index]?.current) {
      chapterRefs[index].current!.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    currentChapter,
    setCurrentChapter,
    storyContainerRef,
    chapterRefs,
    scrollToChapter,
  };
};

/**
 * Custom hook to observe chapter titles and update current chapter
 */
export const useChapterObserver = (
  ageVerified: boolean,
  storyContainerRef: React.RefObject<HTMLDivElement | null>,
  setCurrentChapter: (chapter: number) => void
) => {
  useEffect(() => {
    // Only run intersection observer after age verification is complete
    if (!ageVerified) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the chapter title text to extract chapter number
            const titleElement = entry.target as HTMLElement;
            const titleText = titleElement.textContent || '';
            
            // Extract chapter number from "Chapter X: Title" format
            const chapterMatch = titleText.match(/Chapter (\d+):/);
            if (chapterMatch) {
              const chapterNumber = parseInt(chapterMatch[1], 10);
              setCurrentChapter(chapterNumber);
              console.log("Current Chapter:", chapterNumber, "Title:", titleText);
            }
          }
        });
      },
      {
        root: storyContainerRef.current,
        rootMargin: '-20% 0px -20% 0px', // Trigger when title is in middle 60% of viewport
        threshold: 0.5
      }
    );

    // Wait for components to render, then observe chapter titles
    const timeoutId = setTimeout(() => {
      const chapterTitles = document.querySelectorAll('.chapter-title');
      console.log('Found chapter titles:', chapterTitles.length);
      
      chapterTitles.forEach((title) => {
        observer.observe(title);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [ageVerified, storyContainerRef, setCurrentChapter]);
};
