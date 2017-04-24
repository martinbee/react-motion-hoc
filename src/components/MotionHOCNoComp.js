import React from 'react';
import _ from 'lodash';
import {Motion, spring} from 'react-motion';

export default function MotionHOCNoComp(props) {
  return (
    <Motion defaultStyle={{ height: 0, width: 0 }} style={{ height: spring(100), width: spring(100) }}>
      {style => React.cloneElement(props.children, { style })}
    </Motion>
  );
}
