import React from 'react';
import { SiGithub, SiLinkedin, SiFacebook } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        {
            icon: <SiGithub />,
            href: "https://github.com/marxcuadros24-png",
            label: "GitHub"
        },
        {
            icon: <SiLinkedin />,
            href: "https://www.linkedin.com/in/marx-laurof-cuadros-flores-893917388/",
            label: "LinkedIn"
        },
        {
            icon: <MdEmail />,
            href: "mailto:marxcuadros24@gmail.com",
            label: "Email"
        },
        {
            icon: <SiFacebook />,
            href: "https://www.facebook.com/marx.cuadros",
            label: "Facebook"
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-social">
                    <h3 className="footer-social-title">Conecta Conmigo</h3>
                    <div className="footer-social-links">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-text">
                        © {currentYear} Marx Cuadros. Todos los derechos reservados.
                    </p>
                    <p className="footer-tagline">
                        Diseñado y desarrollado con <span className="heart">❤️</span> y mucho café ☕
                    </p>
                </div>
            </div>

            {/* Efecto de brillo animado */}
            <div className="footer-glow"></div>
        </footer>
    );
};

export default Footer;
