import React from 'react';

function ComponentDemo() {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ flex: '1 1 220px', maxWidth: 260 }}>
        <div style={{
          width: 'var(--iui-component-card-width)',
          minHeight: 80,
          background: '#2563eb',
          border: '2px solid #6366f1',
          borderRadius: 8,
          margin: '0 auto',
          marginBottom: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '1.1rem',
        }}>
          Card Width
          <div className="sizing-label" style={{ marginTop: 8 }}>Token: var(--iui-component-card-width)</div>
        </div>
      </div>
      <div style={{ flex: '1 1 220px', maxWidth: 260 }}>
        <div style={{
          width: 'var(--iui-component-modal-width)',
          minHeight: 80,
          background: '#4f46e5',
          border: '2px solid #6366f1',
          borderRadius: 8,
          margin: '0 auto',
          marginBottom: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '1.1rem',
        }}>
          Modal Width
          <div className="sizing-label" style={{ marginTop: 8 }}>Token: var(--iui-component-modal-width)</div>
        </div>
      </div>
      <div style={{ flex: '1 1 220px', maxWidth: 260 }}>
        <div style={{
          height: 'var(--iui-component-button-height)',
          width: 160,
          background: '#a5b4fc',
          border: '2px solid #6366f1',
          borderRadius: 8,
          margin: '0 auto',
          marginBottom: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          color: '#1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '1.1rem',
        }}>
          Button Height
          <div className="sizing-label" style={{ marginTop: 8 }}>Token: var(--iui-component-button-height)</div>
        </div>
      </div>
    </div>
  );
}

export default ComponentDemo; 