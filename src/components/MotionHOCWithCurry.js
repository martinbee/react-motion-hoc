// dis
import React from 'react';
import _ from 'lodash';
import {Motion, spring} from 'react-motion';

function getStyleSetup(animationType) {
  if (animationType === "Grow") {
    return { default: { height: 0, width: 0 }, style: { height: spring(50), width: spring(50) }};
  } else if (animationType === "FadeIn") {
    return { default: { opacity: 0 }, style: { opacity: spring(1) }};
  }
}

function MotionHOC(animationType, WrappedElement) {
  const styleSetup = getStyleSetup(animationType);

  return function(props) {
    return (
      <Motion defaultStyle={styleSetup.default} style={styleSetup.style}>
        {value => {
          return React.createElement(WrappedElement, { ...props, style: value });
        }}
      </Motion>
    );
  }
}

export default _.curry(MotionHOC);

// Below is the same as _.curry;
//function MotionHOCWithout_Curry(animationType) {
  //console.log(animationType);

  //return function(WrappedElement){
    //return function(props) {
      //return (
        //<Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
          //{value => <WrappedElement {...props} {...value} />}
        //</Motion>
      //);
    //}
  //}
//}
