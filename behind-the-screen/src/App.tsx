// Components
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import ChapterFive from './components/ChapterFive';
import AgeVerification from './components/AgeVerification';
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

function App() {
  // Custom hooks for separated concerns
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const { ageVerified, handleAgeVerification } = useAgeVerification();
  const { 
    currentChapter, 
    setCurrentChapter, 
    storyContainerRef, 
    chapterRefs, 
    scrollToChapter 
  } = useChapterNavigation(APP_CONFIG.TOTAL_CHAPTERS);

  // Set up chapter observation
  useChapterObserver(ageVerified, storyContainerRef, setCurrentChapter);

  // Handle age verification completion
  const handleAgeVerificationComplete = () => {
    handleAgeVerification();
    setCurrentChapter(1); // Reset to chapter 1
  };

  return (
    <div className="App">
      {!ageVerified ? (
        <AgeVerification onVerified={handleAgeVerificationComplete} />
      ) : (
        <>
          <button 
            className={`fullscreen-toggle ${isFullscreen ? 'in-fullscreen' : ''}`}
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          />
          <ShareButton />

          <div className="story-container" ref={storyContainerRef}>
            <div ref={chapterRefs[0]}><ChapterOne /></div>
            <div ref={chapterRefs[1]}><ChapterTwo /></div>
            <div ref={chapterRefs[2]}><ChapterThree /></div>
            <div ref={chapterRefs[3]}><ChapterFour /></div>
            <div ref={chapterRefs[4]}><ChapterFive /></div>
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
          
        </>
      )}
    </div>
  );
}

export default App;
