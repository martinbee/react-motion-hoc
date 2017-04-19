import React from 'react';
import _ from 'lodash';
import {Motion, spring} from 'react-motion';

function MotionHOC(animationType, WrappedElement) {
  console.log(animationType);

  return function(props) {
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        {value => <WrappedElement {...props} {...value} />}
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
