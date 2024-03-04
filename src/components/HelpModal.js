import React from "react";
import "./HelpModal.css"

function HelpModal( {isOpen, onClose}) {
  return (
    <div className={`help-modal ${isOpen ? 'open' : 'closed'}`}>
        <p>This is a help section.</p>

        <ol>
            <li>Press the plus sign at top left</li>
            <li>Populate form with valid data</li>
            <li>Click card on card to open data</li>
            <li>Click X to remove card</li>
            <li>When card is opened you can edit the card</li>
        </ol>
        <p>Application created by Pavle Paunovic</p>
        <button onClick={onClose}>Close</button>
    </div>
    );
}

export default HelpModal;