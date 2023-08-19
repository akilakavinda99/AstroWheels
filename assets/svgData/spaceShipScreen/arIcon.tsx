import * as React from 'react';
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function ArIcon(props) {
  return (
    <Svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_b_553_1005)">
        <G clipPath="url(#clip0_553_1005)" fill="#fff">
          <Path d="M21.343 19.825h-2.802a1.91 1.91 0 01-1.356-.56l-.974-.974a1.008 1.008 0 00-1.422-.002l-.974.975a1.91 1.91 0 01-1.356.56H9.657A1.916 1.916 0 017.74 17.91v-5.843c0-1.07.87-1.915 1.916-1.915h11.686c1.041 0 1.916.841 1.916 1.915v5.844c0 1.07-.87 1.915-1.916 1.915zM15.5 17.086c.506 0 1 .205 1.354.562l.974.973c.19.19.444.295.713.295h2.802c.547 0 1.006-.443 1.006-1.006v-5.844c0-.564-.46-1.006-1.006-1.006H9.657c-.547 0-1.007.443-1.007 1.006v5.844c0 .564.46 1.006 1.007 1.006h2.802c.269 0 .523-.105.714-.296l.974-.973c.354-.356.847-.561 1.353-.561z" />
          <Path d="M12.091 16.903a1.918 1.918 0 01-1.915-1.915c0-1.056.859-1.915 1.915-1.915s1.916.859 1.916 1.915-.86 1.915-1.916 1.915zm0-2.921a1.007 1.007 0 000 2.012 1.007 1.007 0 000-2.012zM18.908 16.903a1.918 1.918 0 01-1.915-1.915c0-1.056.859-1.915 1.915-1.915s1.916.859 1.916 1.915-.86 1.915-1.916 1.915zm0-2.921a1.007 1.007 0 000 2.012 1.007 1.007 0 000-2.012z" />
        </G>
        <Rect
          x={1.01724}
          y={0.517241}
          width={28.9655}
          height={28.9655}
          rx={4.65517}
          stroke="url(#paint0_linear_553_1005)"
          strokeWidth={1.03448}
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_553_1005"
          x1={1.35987}
          y1={-3.87931}
          x2={-5.69213}
          y2={6.55995}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={0.303512} stopColor="#fff" stopOpacity={0.62} />
          <Stop offset={0.59233} stopColor="#fff" stopOpacity={0.69} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <ClipPath id="clip0_553_1005">
          <Path
            fill="#fff"
            transform="translate(7.741 7.241)"
            d="M0 0H15.5172V15.5172H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArIcon;
