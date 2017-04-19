import React from 'react';
import './App.css';
import ElementToWrap from './components/ElementToWrap';

export default function App() {
  console.log(ElementToWrap);
  return (
    <div className="App">
      <ElementToWrap />
    </div>
  );
}
