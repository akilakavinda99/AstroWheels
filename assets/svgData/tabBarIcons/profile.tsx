import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Profile({focused}) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H7.167a3.333 3.333 0 00-3.334 3.333V17.5m10-11.667a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0z"
        stroke={focused == true ? '#0BE9A6' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Profile;
