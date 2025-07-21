import React from 'react';

function LanguageCard({ flag, language, level, percentage }) {
  return (
    <div className="language-card">
      <div className="language-header">
        <span className="language-flag" role="img" aria-label={language}>{flag}</span>
        <h3 className="language-name">{language}</h3>
      </div>
      <div className="proficiency-bar-container">
        <div 
          className="proficiency-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="proficiency-level">{level}</p>
    </div>
  );
}

export default LanguageCard;