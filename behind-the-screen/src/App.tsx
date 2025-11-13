import { useState, useEffect, useRef } from 'react';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import './components/AgeVerification.css'
import AgeVerification from './components/AgeVerification'
import ChapterFive from './components/ChapterFive';
import './Story.css';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);
  const storyContainerRef = useRef<HTMLDivElement | null>(null);

  const chapterRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem('ageVerified');
    if (isAgeVerified === 'true') {
      setAgeVerified(true);
    }
  }, []);

  const toggleFullscreen = () => {
    console.log(currentChapter)
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



  const scrollToChapter = (index: number) => {
    if (chapterRefs[index].current) {
      chapterRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
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
    setTimeout(() => {
      const chapterTitles = document.querySelectorAll('.chapter-title');
      console.log('Found chapter titles:', chapterTitles.length);
      
      chapterTitles.forEach((title) => {
        observer.observe(title);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleAgeVerification = () => {
    setAgeVerified(true);
  };

  return (
    <div className="App">
      {!ageVerified ? (
        <AgeVerification onVerified={handleAgeVerification} />
      ) : (
        <>
              <button 
            className={`fullscreen-toggle ${isFullscreen ? 'in-fullscreen' : ''}`}
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          />
    
          <div className="story-container" ref={storyContainerRef}>
            <div ref={chapterRefs[0]}><ChapterOne /></div>
            <div ref={chapterRefs[1]}><ChapterTwo /></div>
            <div ref={chapterRefs[2]}><ChapterThree /></div>
            <div ref={chapterRefs[3]}><ChapterFour /></div>
            <div ref={chapterRefs[4]}><ChapterFive /></div>
      </div>

      <div className="sidebar">
        {[1, 2, 3, 4, 5].map((chapter, index) => (
          <div
            key={chapter}
            className={`sidebar-item ${currentChapter === chapter ? 'active' : ''}`}
            onClick={() => scrollToChapter(index)}
            style={{ background: currentChapter === chapter ? '#fc8181' : '#667eea' }}
          >
            {chapter}
          </div>
        ))}
          </div>
          
        </>
      )}
    </div>
  );
}

export default App;
