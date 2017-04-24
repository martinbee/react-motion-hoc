import React from 'react';
import _ from 'lodash';
import { Motion } from 'react-motion';
import getAnimationStyles from '../utils/getAnimationStyles';

function MotionHOC(animationType, WrappedElement) {
  const styleSetup = getAnimationStyles(animationType);

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
