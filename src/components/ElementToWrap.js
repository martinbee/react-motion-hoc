import React from 'react';
import MotionHOC from './components/MotionHOC';

function ElementToWrap({ text }) {
  return <div>{text}</div>;
}

export default MotionHOC(ElementToWrap);
