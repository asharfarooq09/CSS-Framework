import React from 'react';

const opacityVariants = [
  { name: '0% opacity', className: 'opacity-0' },
  { name: '10% opacity', className: 'opacity-10' },
  { name: '20% opacity', className: 'opacity-20' },
  { name: '25% opacity', className: 'opacity-25' },
  { name: '30% opacity', className: 'opacity-30' },
  { name: '40% opacity', className: 'opacity-40' },
  { name: '50% opacity', className: 'opacity-50' },
  { name: '60% opacity', className: 'opacity-60' },
  { name: '70% opacity', className: 'opacity-70' },
  { name: '75% opacity', className: 'opacity-75' },
  { name: '80% opacity', className: 'opacity-80' },
  { name: '90% opacity', className: 'opacity-90' },
  { name: '100% opacity', className: 'opacity-100' },
];

const barStyle = {
  background: '#2563eb',
  color: 'white',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.1rem',
  fontWeight: 600,
  borderRadius: '0',
  marginBottom: '4px',
  transition: 'opacity 0.2s',
};

function OpacityDemo() {
  return (
    <div style={{ width: '100%', maxWidth: 500, margin: '0 auto', background: 'white', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 0 }}>
      {opacityVariants.map((variant) => (
        <div
          key={variant.className}
          style={{ ...barStyle, opacity: `var(--${variant.className})` }}
        >
          {variant.name}
        </div>
      ))}
    </div>
  );
}

export default OpacityDemo; 