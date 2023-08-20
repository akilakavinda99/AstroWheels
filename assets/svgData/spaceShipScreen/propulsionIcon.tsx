import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PropulsionIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.043 23.916c.31.167.695.078.901-.207l11.25-15.515a.703.703 0 00-.569-1.116h-2.981l3.585-6.015A.703.703 0 0017.625 0H9.188a.703.703 0 00-.683.533L5.693 11.83a.703.703 0 00.682.873h3.206L5.716 23.051c-.123.33.017.7.327.865zm5.21-11.67a.703.703 0 00-.66-.95H7.276l2.462-9.89h6.65l-3.585 6.015a.703.703 0 00.604 1.063h2.84l-7.4 10.208 2.406-6.446z"
        fill="#7A6392"
      />
    </Svg>
  );
}

export default PropulsionIcon;
