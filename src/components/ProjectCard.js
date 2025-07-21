import React from 'react';

function ProjectCard({ title, year, description, link, theme }) {
  const cardContent = (
    <div className="project-card">
      <h3>{title} <span className="project-year">({year})</span></h3>
      <p>{description}</p>
      {theme && theme.length > 0 && (
        <div className="pills-container">
          {theme.map((skill, index) => (
            <span key={index} className="project-theme-pill">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  // If a link exists, wrap the card content in an anchor tag.
  // Otherwise, just return the card content as a div.
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-card-link"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default ProjectCard;