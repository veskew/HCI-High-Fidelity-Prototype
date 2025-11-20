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
        <p>Are you comfortable engaging with all of the following topics: references to suicide, depression, loneliness.</p>
        <p>Do you wish to proceed?</p>
        <div className="trigger-warning-buttons">
          <button className="trigger-warning-button-yes" onClick={onAccept}>Yes</button>
          <button className="trigger-warning-button-no" onClick={handleDecline}>No</button>
        </div>
      </div>
    </div>
  );
};

export default TriggerWarning;
