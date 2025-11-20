import { useState, useEffect } from 'react';

// Components
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import ChapterFive from './components/ChapterFive';
import Credits from './components/Credits';
import AgeVerification from './components/AgeVerification';
import TriggerWarning from './components/TriggerWarning';
import ShareButton from './components/ShareButton'

// Hooks
import { 
  useFullscreen, 
  useAgeVerification, 
  useChapterNavigation,
  useChapterObserver 
} from './hooks/useStoryHooks';

// Utils
import { getChapterColor } from './utils/storyUtils';

// Constants
import { APP_CONFIG } from './constants/appConstants';

// Styles
import './components/AgeVerification.css';
import './Story.css';

type AppScreen = 'ageVerification' | 'triggerWarning' | 'mainContent';

function App() {
  const { ageVerified, handleAgeVerification } = useAgeVerification();
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('ageVerification');

  // Initialize screen based on age verification status from localStorage
  useEffect(() => {
    if (ageVerified) {
      setCurrentScreen('triggerWarning'); // If age is verified, proceed to trigger warning
    }
  }, [ageVerified]);


  // Custom hooks for separated concerns
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const { 
    currentChapter, 
    setCurrentChapter, 
    storyContainerRef, 
    getChapterRef, 
    scrollToChapter 
  } = useChapterNavigation(APP_CONFIG.TOTAL_CHAPTERS);
  
  // Set up chapter observation
  useChapterObserver(ageVerified && currentScreen === 'mainContent', storyContainerRef, setCurrentChapter);

  // Handle age verification completion
  const handleAgeVerificationComplete = () => {
    console.log('Age verification complete.');
    handleAgeVerification(); // Sets ageVerified to true and stores in localStorage
    setCurrentScreen('triggerWarning');
  };

  const handleTriggerWarningAccept = () => {
    console.log('Trigger warning accepted. Loading main content.');
    setCurrentScreen('mainContent');
    setCurrentChapter(1); // Reset to chapter 1
  };

  switch (currentScreen) {
    case 'ageVerification':
      return <AgeVerification onVerified={handleAgeVerificationComplete} />;
    case 'triggerWarning':
      return <TriggerWarning onAccept={handleTriggerWarningAccept} />;
    case 'mainContent':
      return (
        <div className="App">
          <button 
            className={`fullscreen-toggle ${isFullscreen ? 'in-fullscreen' : ''}`}
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          />
          <ShareButton />

          <div className="story-container" ref={storyContainerRef}>
            <div ref={getChapterRef(0)}><ChapterOne /></div>
            <div ref={getChapterRef(1)}><ChapterTwo /></div>
            <div ref={getChapterRef(2)}><ChapterThree /></div>
            <div ref={getChapterRef(3)}><ChapterFour /></div>
            <div ref={getChapterRef(4)}><ChapterFive /></div>
            <Credits/>  
          </div>

          <div className="sidebar">
            {Array.from({ length: APP_CONFIG.TOTAL_CHAPTERS }, (_, index) => {
              const chapterNumber = index + 1;
              const isActive = currentChapter === chapterNumber;
              
              return (
                <div
                  key={chapterNumber}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  onClick={() => scrollToChapter(index)}
                  style={{ background: getChapterColor(isActive) }}
                >
                  {chapterNumber}
                </div>
              );
            })}
          </div>
        </div>
      );
    default:
      return null; // Should not happen, but a safeguard
  }
}

export default App;
