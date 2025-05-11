import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

const overlayVariants = [
  // Basic Overlays
  { name: 'Light Overlay', className: 'iui-overlay-light', modalContent: 'Basic light overlay with 75% opacity' },
  { name: 'Dark Overlay', className: 'iui-overlay-dark', modalContent: 'Basic dark overlay with 75% opacity' },
  { name: 'Blur Overlay', className: 'iui-overlay-blur', modalContent: 'Basic blur overlay with 4px blur' },

  // Colored Overlays
  { name: 'Blue Overlay', className: 'iui-overlay-blue', modalContent: 'Blue colored overlay with 75% opacity' },
  { name: 'Purple Overlay', className: 'iui-overlay-purple', modalContent: 'Purple colored overlay with 75% opacity' },
  { name: 'Green Overlay', className: 'iui-overlay-green', modalContent: 'Green colored overlay with 75% opacity' },
  { name: 'Red Overlay', className: 'iui-overlay-red', modalContent: 'Red colored overlay with 75% opacity' },

  // Gradient Overlays
  { name: 'Light Gradient', className: 'iui-overlay-gradient-light', modalContent: 'Light gradient overlay from 90% to 50% opacity' },
  { name: 'Dark Gradient', className: 'iui-overlay-gradient-dark', modalContent: 'Dark gradient overlay from 90% to 50% opacity' },
  { name: 'Blue Gradient', className: 'iui-overlay-gradient-blue', modalContent: 'Blue gradient overlay from 90% to 50% opacity' },

  // Blur Variations
  { name: 'Small Blur', className: 'iui-overlay-blur-sm', modalContent: 'Small blur overlay with 2px blur' },
  { name: 'Medium Blur', className: 'iui-overlay-blur-md', modalContent: 'Medium blur overlay with 4px blur' },
  { name: 'Large Blur', className: 'iui-overlay-blur-lg', modalContent: 'Large blur overlay with 8px blur' },
  { name: 'Extra Large Blur', className: 'iui-overlay-blur-xl', modalContent: 'Extra large blur overlay with 12px blur' },
];

function OverlayDemo() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="demo-grid">
      {overlayVariants.map((variant) => (
        <React.Fragment key={variant.className}>
          <Card
            className="overlay-demo-card"
            onClick={() => setActiveModal(variant.className)}
          >
            <h3>{variant.name}</h3>
            <p>Click to open modal</p>
          </Card>
          
          <Modal
            isOpen={activeModal === variant.className}
            onClose={() => setActiveModal(null)}
            overlayType={variant.className}
          >
            <div className="modal-demo-content">
              <h3>{variant.name}</h3>
              <p>{variant.modalContent}</p>
            </div>
          </Modal>
        </React.Fragment>
      ))}
    </div>
  );
}

export default OverlayDemo; 