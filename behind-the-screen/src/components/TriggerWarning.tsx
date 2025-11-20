import React, { useState } from 'react';
import './TriggerWarning.css';

interface TriggerWarningProps {
  onAccept: () => void;
  onDecline?: () => void;
}

const TriggerWarning: React.FC<TriggerWarningProps> = ({ onAccept, onDecline }) => {
  const [declined, setDeclined] = useState(false);

  const handleDecline = () => {
    setDeclined(true);
    if (onDecline) {
      onDecline();
    }
  };

  if (declined) {
    return (
      <div className="trigger-warning-overlay">
        <div className="trigger-warning-content">
          <p>You have chosen not to proceed. You can close this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="trigger-warning-overlay">
      <div className="trigger-warning-content">
        <h2>Trigger Warning</h2>
        <p>This story contains themes of social media addiction, mental health struggles, and other sensitive topics that may be disturbing to some readers.</p>
        <p>Do you wish to proceed?</p>
        <div className="trigger-warning-buttons">
          <button onClick={onAccept}>Yes</button>
          <button onClick={handleDecline}>No</button>
        </div>
      </div>
    </div>
  );
};

export default TriggerWarning;
