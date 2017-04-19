import React from 'react';
import MotionHOC from './MotionHOC';

function ElementToWrap({ text, x }) {
  return <div>{text}{x}</div>;
}

export default MotionHOC(ElementToWrap);
