import React, { useState } from 'react';
import './text-panel.css'; // Importing the CSS file for styling

const TextPanelWidget: React.FC = () => {
    // Sample text with JSON objects and coordinates
    const initialText = `
        {
            "name": "Example Object",
            "description": "Just an example.",
            "coordinates": "Points: (12, 34), (56, 78), (90, 12)"
        }
        More text here...
        Points: (23, 45), (67, 89)
    `;

    // Regular expression to match coordinates
    const regex = /Points: \(\d+, \d+\)(, \(\d+, \d+\))*/g;

    const [text, setText] = useState(initialText);
    const [isToggled, setIsToggled] = useState(false);

    const toggleText = () => {
        if (!isToggled) {
            const matchedText = initialText.match(regex)?.join('\n') || '';
            setText(matchedText);
        } else {
            setText(initialText);
        }
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <div className="text-panel">
                {text}
            </div>
            <label className="toggle">
                <input type="checkbox" checked={isToggled} onChange={toggleText} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default TextPanelWidget;
