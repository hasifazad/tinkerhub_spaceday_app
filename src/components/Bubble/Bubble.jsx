import React from 'react';
import './Bubble.css';

const BubbleContainer = ({ numberOfBubbles }) => {
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const renderBubbles = () => {
        const bubbles = [];
        for (let i = 0; i < numberOfBubbles; i++) {
            const size = Math.floor(Math.random() * 20) + 10; // Random size between 10 and 30 pixels
            const left = Math.floor(Math.random() * 180) + 10; // Random horizontal position
            const animationDuration = Math.floor(Math.random() * 6) + 3; // Random animation duration between 3s and 9s
            const color = generateRandomColor();

            const bubbleStyle = {
                // width: size + 'px',
                // height: size + 'px',
                width: '50px',
                height: '50px',
                left: left + 'px',
                backgroundColor: color,
                animationDuration: `${animationDuration}s`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '1rem'
            };

            bubbles.push(<div key={i} className="bubble" style={bubbleStyle}>{i}</div>);
        }
        return bubbles;
    };

    return <div className="bubble-container">{renderBubbles()}</div>;
};

export default BubbleContainer;
