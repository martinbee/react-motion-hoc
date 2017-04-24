import React from 'react';
import _ from 'lodash';
import {Motion, spring} from 'react-motion';

export default function MotionHOCNoComp(props) {
  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
      {value => {
        console.log(value);

        return props.children;
      }}
    </Motion>
  );
}
