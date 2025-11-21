import React from 'react';
import './LiquidChromeLogo.css';

const LiquidChromeLogo: React.FC = () => {
    return (
        <div className="liquid-chrome-container">
            <svg viewBox="0 0 200 200" className="liquid-chrome-svg">
                <defs>
                    <filter id="liquid-metal">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.01"
                            numOctaves="3"
                            result="warp"
                        >
                            <animate
                                attributeName="baseFrequency"
                                values="0.01;0.02;0.01"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="30"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>

                    <linearGradient id="chrome-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#40ffaa" />
                        <stop offset="25%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#4079ff" />
                        <stop offset="75%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#ff40aa" />
                        <animate
                            attributeName="x1"
                            values="0%;100%;0%"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="y1"
                            values="0%;100%;0%"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                </defs>

                <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    className="chrome-text"
                    filter="url(#liquid-metal)"
                    fill="url(#chrome-gradient)"
                >
                    MC
                </text>
            </svg>
        </div>
    );
};

export default LiquidChromeLogo;
