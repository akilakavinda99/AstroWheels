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

function SvgCompartmentBooked(props) {
    return (
        <Svg
            width="100%"
            height="100%"
            viewBox="0 0 58.149902 65.285728"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                opacity={0.5}
                d="M12.793 0L1.15 13.308v40.625l11.643 9.806c11.8 2.801 25.099 1.167 30.274 0l10.867-9.806V13.308L43.843 0z"
                fill="url(#a)"
            />
            <G opacity={0.5}>
                <Path
                    d="M54.353 13.771c-11.807-5.846-44.808-4.193-52.785-.29v39.6c18.58-7.164 43.635-2.067 52.785 1.378z"
                    fill="#1b171e"
                    transform="translate(-.418 -.286)"
                />
                <Path
                    d="M54.353 13.771c-11.807-5.846-44.808-4.193-52.785-.29v39.6c18.58-7.164 43.635-2.067 52.785 1.378z"
                    fill="url(#b)"
                    fillOpacity={0.2}
                    transform="translate(-.418 -.286)"
                />
            </G>
            <G opacity={0.5} filter="url(#c)" transform="translate(-.418 -.286)">
                <Circle
                    cx={30.568399}
                    cy={29.285601}
                    r={10}
                    fill="#8765a9"
                    fillOpacity={0.5}
                />
            </G>
            <Path
                opacity={0.5}
                d="M53.935 54.173V13.308l-4.167 36.698-6.946 13.89zM1.15 54.173v-40.83L5.317 49.2l6.945 14.002z"
                fill="#ed0303"
            />
            <G opacity={0.5}>
                <G filter="url(#d)" transform="translate(-.418 -.286)">
                    <Path
                        d="M1.568 13.786l4 35.5 7 14"
                        stroke="#cb97ff"
                        strokeWidth={0.3}
                        strokeLinecap="round"
                    />
                </G>
                <Path
                    d="M1.568 13.786l4 35.5 7 14"
                    stroke="#52376c"
                    strokeWidth={0.3}
                    strokeLinecap="round"
                    transform="translate(-.418 -.286)"
                />
            </G>
            <G opacity={0.5}>
                <G filter="url(#e)" transform="translate(-.418 -.286)">
                    <Path
                        d="M54.068 14.286l-3.5 35.5-7 14"
                        stroke="#cb97ff"
                        strokeWidth={0.3}
                        strokeLinecap="round"
                    />
                </G>
                <Path
                    d="M54.068 14.286l-3.5 35.5-7 14"
                    stroke="#52376c"
                    strokeWidth={0.3}
                    strokeLinecap="round"
                    transform="translate(-.418 -.286)"
                />
            </G>
            <Defs>
                <Path
                    id="f"
                    d="M8.8371534 19.585043H48.5645364V44.344995999999995H8.8371534z"
                />
                <LinearGradient
                    id="a"
                    x1={27.960501}
                    y1={0.28564501}
                    x2={27.960501}
                    y2={65.571404}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-.418 -.286)"
                >
                    <Stop stopColor="#483A56" />
                    <Stop offset={1} stopColor="#3B2F46" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={27.960501}
                    y1={17.814199}
                    x2={27.960501}
                    y2={41.692799}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop />
                    <Stop offset={1} stopOpacity={0} />
                </LinearGradient>
            </Defs>
            <Text
                xmlSpace="preserve"
                style={{
                    InkscapeFontSpecification: "'Space Grotesk, Normal'",
                    whiteSpace: "pre",
                    shapeInside: "url(#f)"
                }}
                transform="matrix(1.41163 0 0 1.4101 6.077 -6.826)"
                fontSize="12px"
                fontFamily="Space Grotesk"
                fill="#891216"
                fillOpacity={1}
                strokeWidth={1.00157}
            >
                <TSpan x={8.8378906} y={30.339856}>
                    {props.value || "00"}
                </TSpan>
            </Text>
        </Svg>
    )
}

export default SvgCompartmentBooked;
