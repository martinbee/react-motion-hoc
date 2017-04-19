import React from 'react';
import './App.css';
import ElementToWrap from './components/ElementToWrap';
import ElementToWrapWithCurry from './components/ElementToWrapWithCurry';

export default function App() {
  return (
    <div className="App">
      <ElementToWrap text={"React motion spring is at "} />
      <ElementToWrapWithCurry text={"React motion spring is at "} />
    </div>
  );
}
