import * as React from "react"
import Svg, {
  Path,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgCompartment(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 58.149902 65.285774"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.794 0L1.15 13.308v40.625l11.644 9.806c11.798 2.802 25.098 1.167 30.273 0l10.867-9.806V13.308L43.843 0z"
        fill="url(#a)"
      />
      <Path
        d="M53.934 13.485C42.127 7.64 9.126 9.292 1.15 13.195v39.6c18.58-7.164 43.635-2.066 52.784 1.378z"
        fill="#131022"
      />
      <Path
        d="M53.934 13.485C42.127 7.64 9.126 9.292 1.15 13.195v39.6c18.58-7.164 43.635-2.066 52.784 1.378z"
        fill="url(#b)"
        fillOpacity={0.2}
      />
      <G filter="url(#c)" transform="translate(-.85)">
        <Circle cx={31} cy={29} r={10} fill="#8765a9" fillOpacity={0.5} />
      </G>
      <Path
        d="M53.935 54.173V13.308l-4.167 36.698-6.946 13.89zM1.15 54.173v-40.83L5.317 49.2l6.945 14.002z"
        fill="#8765a9"
      />
      <G filter="url(#d)" transform="translate(-.85)">
        <Path
          d="M2 13.5L6 49l7 14"
          stroke="#cb97ff"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M1.15 13.5l4 35.5 7 14"
        stroke="#52376c"
        strokeWidth={0.3}
        strokeLinecap="round"
      />
      <G filter="url(#e)" transform="translate(-.85)">
        <Path
          d="M54.5 14L51 49.5l-7 14"
          stroke="#cb97ff"
          strokeWidth={0.3}
          strokeLinecap="round"
        />
      </G>
      <Path
        d="M53.65 14l-3.5 35.5-7 14"
        stroke="#52376c"
        strokeWidth={0.3}
        strokeLinecap="round"
      />
      <Defs>
        <Path
          id="f"
          d="M14.171291 14.410133H37.896260999999996V33.835947H14.171291z"
        />
        <LinearGradient
          id="a"
          x1={28.392099}
          y1={0}
          x2={28.392099}
          y2={65.285698}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-.85)"
        >
          <Stop stopColor="#483A56" />
          <Stop offset={1} stopColor="#3B2F46" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={28.392099}
          y1={17.5285}
          x2={28.392099}
          y2={41.407101}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-.85)"
        >
          <Stop />
          <Stop offset={1} stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Text
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
          shapeInside: "url(#f)"
        }}
        transform="matrix(1.41872 0 0 1.37365 -.478 .903)"
        opacity={1}
        fill="#fff"
        strokeWidth={1.00157}
      >
        <TSpan x={14.171875} y={25.328658}>
          <TSpan
            style={{
              InkscapeFontSpecification: "'Space Grotesk, Normal'"
            }}
            fontSize="12px"
            fontFamily="Space Grotesk"
          >
            {props.value || "00"}
          </TSpan>
        </TSpan>
      </Text>
    </Svg>
  )
}

export default SvgCompartment;
