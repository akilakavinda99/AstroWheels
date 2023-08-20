import * as React from 'react';
import Svg, {G, Path, Rect, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SliderPrevious(props) {
  return (
    <Svg
      width={58}
      height={58}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_b_174_5199)">
        <Path
          d="M25.25 21.5l7.5 7.5-7.5 7.5"
          stroke="#F2F2F2"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={1}
          y={1}
          width={56}
          height={56}
          rx={9}
          stroke="url(#paint0_linear_174_5199)"
          strokeWidth={2}
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_174_5199"
          x1={1.66242}
          y1={-7.5}
          x2={-11.9715}
          y2={12.6826}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.303512} stopColor="#fff" stopOpacity={0.62} />
          <Stop offset={0.59233} stopColor="#fff" stopOpacity={0.69} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SliderPrevious;
