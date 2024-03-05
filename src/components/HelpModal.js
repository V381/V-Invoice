import React from "react";
import "./HelpModal.css"

function HelpModal( {isOpen, onClose}) {
  return (
    <div className={`help-modal ${isOpen ? 'open' : 'closed'}`}>
        <p>This is a help section.</p>

        <ol>
            <li>Click the plus sign at the top left.</li>
            <li>Populate the form with valid data.</li>
            <li>Click on a card to open its data.</li>
            <li>Click the X to remove the card.</li>
            <li>When a card is opened, you can edit its content.</li>
        </ol>
        <p>Application created by Pavle Paunovic</p>
        <button onClick={onClose}>Close</button>
    </div>
    );
}

export default HelpModal;