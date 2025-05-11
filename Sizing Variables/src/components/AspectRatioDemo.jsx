import React from 'react';

const aspectRatios = [
  { label: '1 / 1', token: 'var(--iui-aspect-1-1)' },
  { label: '16 / 9', token: 'var(--iui-aspect-16-9)' },
  { label: '4 / 3', token: 'var(--iui-aspect-4-3)' },
  { label: '3 / 2', token: 'var(--iui-aspect-3-2)' },
  { label: '21 / 9', token: 'var(--iui-aspect-21-9)' },
];

function AspectRatioDemo() {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      {aspectRatios.map(({ label, token }) => (
        <div key={label} style={{ flex: '1 1 220px', maxWidth: 240 }}>
          <div
            style={{
              aspectRatio: token,
              width: 220,
              background: '#4f46e5',
              border: '2px solid #6366f1',
              borderRadius: 8,
              position: 'relative',
              margin: '0 auto',
              marginBottom: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{
              position: 'absolute',
              top: 8,
              left: 8,
              background: 'rgba(255,255,255,0.85)',
              color: '#1e293b',
              padding: '2px 8px',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: '1rem',
            }}>{label}</span>
          </div>
          <div className="sizing-label" style={{ marginTop: 8, textAlign: 'center' }}>
            Token: <code>{token}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AspectRatioDemo; 