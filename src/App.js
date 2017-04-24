import React from 'react';
import './App.css';
import ElementToWrap from './components/ElementToWrap';
import ElementToWrapWithCurry from './components/ElementToWrapWithCurry';
import MotionHOCNoComp from './components/MotionHOCNoComp';

export default function App() {
  return (
    <div className="App">
      <ElementToWrap text={"React motion spring is at "} />
      <ElementToWrapWithCurry text={"React motion spring is at "} />
      <MotionHOCNoComp animation="Grow">
        <div>
          <ul>
            <li>Hello world</li>
          </ul>
        </div>
      </MotionHOCNoComp>
    </div>
  );
}
