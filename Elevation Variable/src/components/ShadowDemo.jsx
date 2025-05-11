import React from 'react';
import Card from './Card';

const shadowVariants = [
  // Basic Shadows
  { name: 'No Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-none' },
  { name: 'Small Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-sm' },
  { name: 'Medium Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-md' },
  { name: 'Large Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-lg' },
  { name: 'Extra Large Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-xl' },
  { name: '2XL Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-2xl' },
  
  // Colored Shadows
  { name: 'Blue Small Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-blue-sm' },
  { name: 'Blue Medium Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-blue-md' },
  { name: 'Blue Large Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-blue-lg' },
  { name: 'Purple Small Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-purple-sm' },
  { name: 'Purple Medium Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-purple-md' },
  { name: 'Purple Large Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-purple-lg' },
  
  // Directional Shadows
  { name: 'Top Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-top' },
  { name: 'Bottom Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-bottom' },
  { name: 'Left Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-left' },
  { name: 'Right Shadow', className: 'shadow-none', hoverClass: 'hover:shadow-right' },
];

function ShadowDemo() {
  return (
    <div className="demo-grid">
      {shadowVariants.map((variant) => (
        <Card
          key={variant.className}
          className={`shadow-demo-card ${variant.className} ${variant.hoverClass}`}
        >
          <h3>{variant.name}</h3>
          <p>Hover to see shadow effect</p>
        </Card>
      ))}
    </div>
  );
}

export default ShadowDemo; 