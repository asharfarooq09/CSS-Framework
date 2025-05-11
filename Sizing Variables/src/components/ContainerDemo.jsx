import React from 'react';

const containers = [
  { label: 'XS', token: 'var(--iui-container-xs)' },
  { label: 'SM', token: 'var(--iui-container-sm)' },
  { label: 'MD', token: 'var(--iui-container-md)' },
  { label: 'LG', token: 'var(--iui-container-lg)' },
  { label: 'XL', token: 'var(--iui-container-xl)' },
  { label: '2XL', token: 'var(--iui-container-2xl)' },
];

function ContainerDemo() {
  return (
    <div style={{ background: 'repeating-linear-gradient(90deg, #e0e7ef 0 2px, transparent 2px 40px)', padding: '2rem 0', borderRadius: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
        {containers.map(({ label, token }) => (
          <div key={label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                maxWidth: `var(--iui-container-${label.toLowerCase()})`,
                width: '100%',
                minHeight: 80,
                background: '#fff',
                border: '3px solid #6366f1',
                borderRadius: 10,
                margin: '0 auto',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textAlign: 'center',
                position: 'relative',
                padding: '1.5rem 0.5rem',
                transition: 'max-width 0.3s',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 8, left: 16, background: '#6366f1', color: 'white', borderRadius: 4, padding: '2px 10px', fontWeight: 700, fontSize: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                {label} Container
              </div>
              <div style={{ marginTop: 36, fontSize: '0.98rem', color: '#64748b' }}>
                Token: <code>{token}</code>
              </div>
              <div style={{ marginTop: 18, background: '#e0e7ff', color: '#3730a3', borderRadius: 6, padding: '0.75rem 1rem', fontWeight: 600, fontSize: '1.05rem', display: 'inline-block' }}>
                Sample content inside {label} container<br/>
                <span style={{ fontSize: '0.9rem', color: '#6366f1' }}>(max-width: <b>{token}</b>)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerDemo; 