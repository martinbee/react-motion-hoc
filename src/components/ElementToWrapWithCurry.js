import React from 'react';
import MotionHOCWithCurry from './MotionHOCWithCurry';

function ElementToWrap({ text, x }) {
  return <div>{text}{x}</div>;
}

export default MotionHOCWithCurry('grow')(ElementToWrap);
