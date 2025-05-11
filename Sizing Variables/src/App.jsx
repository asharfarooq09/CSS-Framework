import React from 'react';
import AspectRatioDemo from './components/AspectRatioDemo';
import ContainerDemo from './components/ContainerDemo';
import ComponentDemo from './components/ComponentDemo';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Sizing Variables Demo</h1>
      </header>
      <main className="app-main">
        <section className="demo-section">
          <h2>Aspect Ratio Tokens</h2>
          <AspectRatioDemo />
        </section>
        <section className="demo-section">
          <h2>Container Tokens</h2>
          <ContainerDemo />
        </section>
        <section className="demo-section">
          <h2>Component Sizing Tokens</h2>
          <ComponentDemo />
        </section>
      </main>
    </div>
  );
}

export default App; 