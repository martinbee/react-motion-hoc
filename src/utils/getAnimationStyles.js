import { spring } from 'react-motion';

export default function getAnimationStyles(animationType) {
  if (animationType === "grow") {
    return ({
      default: { x: 0, y: 0 },
      style: { x: spring(150), y: spring(150) },
      getCalculatedStyle: ({ x, y }) => ({ width: `${x}px`, height: `${y}px` })
    });
  } else if (animationType === "fadeIn") {
    return ({
      default: { x: 0 },
      style: { x: spring(100) },
      getCalculatedStyle: ({ x }) => ({ opacity: `${x / 100}` })
    });
  } else if (animationType === "slideRight") {
    return ({
      default: { x: 0 },
      style: { x: spring(400) },
      getCalculatedStyle: ({ x }) => ({ transform: `translate3d(${x}px, 0, 0)` })
    });
  }
}
