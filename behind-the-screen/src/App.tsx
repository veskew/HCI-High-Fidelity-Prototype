import React, { useState, useEffect } from 'react'
import ChapterOne from './components/ChapterOne'
import ChapterTwo from './components/ChapterTwo'
import ChapterThree from './components/ChapterThree'
import './Story.css'

function App() {
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

  // Listen for fullscreen changes (e.g., when user presses ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="App">
      {/* Global Fullscreen Toggle Button */}
      <button 
        className={`fullscreen-toggle ${isFullscreen ? 'in-fullscreen' : ''}`}
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      />
      
      <div className="story-container">
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
      </div>
    </div>
  )
}

export default App
