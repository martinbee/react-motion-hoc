import React from 'react';
import MotionHOC from './MotionHOC';

function ElementToWrap(props) {
  return <div>{props.text}{props.x}</div>;
}

export default MotionHOC(ElementToWrap);
