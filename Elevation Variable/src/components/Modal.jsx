import React from 'react';

function Modal({ isOpen, onClose, children, overlayType }) {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${overlayType}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal; 