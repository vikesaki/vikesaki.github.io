import React from 'react';

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="pills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;