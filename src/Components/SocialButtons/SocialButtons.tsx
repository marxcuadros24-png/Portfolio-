import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiDownload } from 'react-icons/hi';
import './SocialButtons.css';

interface SocialButtonsProps {
    githubUrl: string;
    linkedinUrl: string;
    cvUrl?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ githubUrl, linkedinUrl, cvUrl }) => {
    return (
        <div className="social-buttons-wrapper">
            {/* Botón de descarga de CV */}
            {cvUrl && (
                <a
                    href={cvUrl}
                    download="Marx_Cuadros_CV.pdf"
                    className="cv-download-button"
                    aria-label="Descargar CV"
                >
                    <HiDownload className="cv-icon" />
                    <span className="cv-label">Descargar CV</span>
                    <span className="cv-shine"></span>
                </a>
            )}

            {/* Botones sociales */}
            <div className="social-buttons-container">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button github-button"
                    aria-label="GitHub Profile"
                >
                    <SiGithub className="social-icon" />
                    <span className="social-label">GitHub</span>
                    <span className="button-glow"></span>
                </a>

                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button linkedin-button"
                    aria-label="LinkedIn Profile"
                >
                    <SiLinkedin className="social-icon" />
                    <span className="social-label">LinkedIn</span>
                    <span className="button-glow"></span>
                </a>
            </div>
        </div>
    );
};

export default SocialButtons;
