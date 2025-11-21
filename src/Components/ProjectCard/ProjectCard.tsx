import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        demo: string;
        github: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, links }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={image} alt={title} className="project-image" />
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn">
                            Ver Demo
                        </a>
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
