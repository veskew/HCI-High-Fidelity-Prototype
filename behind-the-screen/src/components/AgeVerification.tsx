import React, { useState } from 'react';

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerified }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleVerification = () => {
    if (!day || !month || !year) {
      setError('Please enter a valid date.');
      return;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      if (age - 1 < 15) {
        setError('You must be at least 15 years old to view this content.');
        return;
      }
    }

    if (age < 15) {
      setError('You must be at least 15 years old to view this content.');
      return;
    }

    localStorage.setItem('ageVerified', 'true');
    onVerified();
  };

  return (
    <div className="age-verification">
      <h2 className="age-header">Age Verification</h2>
      <p className="age-paragraph">Please enter your date of birth to continue.</p>
      <div className="date-inputs">
        <input
          type="text"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          maxLength={2}
        />
        <input
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          maxLength={2}
        />
        <input
          type="text"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          maxLength={4}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleVerification}>Submit</button>
    </div>
  );
};

export default AgeVerification;
