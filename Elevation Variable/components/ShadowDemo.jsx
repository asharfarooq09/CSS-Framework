import React from 'react';
import Card from './Card';

const shadowVariants = [
  // Basic Shadows
  { name: 'No Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-none' },
  { name: 'Small Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-sm' },
  { name: 'Medium Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-md' },
  { name: 'Large Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-lg' },
  { name: 'Extra Large Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-xl' },
  { name: '2XL Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-2xl' },
  
  // Colored Shadows
  { name: 'Blue Small Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-blue-sm' },
  { name: 'Blue Medium Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-blue-md' },
  { name: 'Blue Large Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-blue-lg' },
  { name: 'Purple Small Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-purple-sm' },
  { name: 'Purple Medium Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-purple-md' },
  { name: 'Purple Large Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-purple-lg' },
  
  // Directional Shadows
  { name: 'Top Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-top' },
  { name: 'Bottom Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-bottom' },
  { name: 'Left Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-left' },
  { name: 'Right Shadow', className: 'iui-shadow-none', hoverClass: 'hover:iui-shadow-right' },
];

function ShadowDemo() {
  return (
    <div className="demo-grid">
      {shadowVariants.map((variant) => (
        <Card
          key={variant.className + variant.hoverClass}
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