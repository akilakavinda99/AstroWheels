import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RocketSvg({focused}) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.104 7.896l-6.57 6.57m.709-4.768l-3.218-.76a.465.465 0 01-.222-.78l2.559-2.56a.93.93 0 01.65-.272L6.897 5.3m3.634-3.302a20.83 20.83 0 015.47 5.47m-7.7 6.288l.76 3.218a.465.465 0 00.781.223l2.56-2.56a.93.93 0 00.272-.65l.025-2.885m3.853-5.144l.751-3.614A1.394 1.394 0 0015.655.697l-3.613.75a5.569 5.569 0 00-2.808 1.517L6.27 5.928a7.44 7.44 0 00-2.1 4.18l-.01.068a3.23 3.23 0 003.664 3.663l.068-.01a7.434 7.434 0 004.18-2.1l2.964-2.963a5.57 5.57 0 001.516-2.807z"
        stroke={focused == true ? '#0BE9A6' : 'white'}
        strokeLinecap="round"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default RocketSvg;
