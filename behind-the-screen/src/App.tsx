import { useState, useEffect, useRef } from 'react';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import ChapterFive from './components/ChapterFive';
import './Story.css';

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);

  const chapterRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

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

  const handleScroll = () => {
    const newChapter = Math.round(window.scrollY / window.innerHeight) + 1;
    setCurrentChapter(newChapter);
    console.log("Current Chapter:", newChapter);
  };

  const scrollToChapter = (index: number) => {
    if (chapterRefs[index].current) {
      chapterRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <button 
        className={`fullscreen-toggle ${isFullscreen ? 'in-fullscreen' : ''}`}
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      />

      <div className="story-container">
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
          >
            {chapter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
