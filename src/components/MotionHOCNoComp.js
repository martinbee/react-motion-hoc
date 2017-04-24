import React from 'react';
import { Motion } from 'react-motion';
import getAnimationStyles from '../utils/getAnimationStyles';

export default function MotionHOCNoComp({ animation, children }) {
  const { props: childProps } = children;

  const styleSetup = getAnimationStyles(animation);
  const getStyledElement = interpolatedStyles => {
    const styles = styleSetup.getCalculatedStyle(interpolatedStyles);

    return React.cloneElement(children, { style: { ...styles, ...childProps.style }});
  };

  return (
    <Motion defaultStyle={styleSetup.default} style={styleSetup.style}>
      {interpolatedStyles => getStyledElement(interpolatedStyles)}
    </Motion>
  );
}
