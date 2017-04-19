import React from 'react';
import _ from 'lodash';
import {Motion, spring} from 'react-motion';

export default function MotionHOC(WrappedElement) {
  return function(props) {
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        {value => <WrappedElement {...props} {...value} />}
      </Motion>
    );
  }
}
