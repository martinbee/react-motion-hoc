import React from 'react';
import Motion from 'react-motion';
import _ from 'lodash';

export default function MotionHOC(WrappedElement) {
  console.log(WrappedElement);

  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
      {interpolatingStyle => <WrappedElement style={_.merge(interpolatingStyle, style)} {...this.props} />}
    </Motion>
  );
}
