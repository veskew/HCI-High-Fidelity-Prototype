import React from 'react';
import './StaticTextViewer.css';

interface StaticTextViewerProps {
  text: string;
}

const StaticTextViewer: React.FC<StaticTextViewerProps> = ({ text }) => {
  return (
    <div className="static-text-viewer">
      <p>{text}</p>
    </div>
  );
};

export default StaticTextViewer;
