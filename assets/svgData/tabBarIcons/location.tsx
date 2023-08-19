import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Place({focused}) {
  return (
    <Svg
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16 8.333c0 5.834-7.5 10.834-7.5 10.834S1 14.167 1 8.333a7.5 7.5 0 0115 0z"
        stroke={focused == true ? '#0BE9A6' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="#E6E5E6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Place;
