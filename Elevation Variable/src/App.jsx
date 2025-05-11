import React from 'react';
import ShadowDemo from './components/ShadowDemo';
import OpacityDemo from './components/OpacityDemo';
import OverlayDemo from './components/OverlayDemo';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Elevation Tokens Demo</h1>
      </header>
      
      <main className="app-main">
        <section className="demo-section">
          <h2>Shadow Tokens</h2>
          <ShadowDemo />
        </section>

        <section className="demo-section">
          <h2>Opacity Tokens</h2>
          <OpacityDemo />
        </section>

        <section className="demo-section">
          <h2>Overlay Tokens</h2>
          <OverlayDemo />
        </section>
      </main>
    </div>
  );
}

export default App; 