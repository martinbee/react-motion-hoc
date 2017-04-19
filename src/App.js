import React from 'react';
import './App.css';
import MotionHOC from './components/MotionHOC';

const ElementToWrap = ({ text }) => <div>{text}</div>;
const MotionWrapepdElement = MotionHOC(ElementToWrap);

export default function App() {
  return (
    <div className="App">
      <MotionWrapepdElement />
    </div>
  );
}
