import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Settings({focused}) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.75 4.25a.833.833 0 000 1.167l1.333 1.333a.833.833 0 001.167 0l3.142-3.142a5 5 0 01-6.617 6.617l-5.758 5.758a1.768 1.768 0 01-2.5-2.5l5.758-5.758a5 5 0 016.617-6.617l-3.134 3.134-.008.008z"
        stroke={focused == true ? '#0BE9A6' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Settings;
