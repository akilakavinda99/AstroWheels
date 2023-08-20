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

function SvgCompartmentSelected(props) {
    return (
        <Svg
            width="100%"
            height="100%"
            viewBox="0 0 58.150003 66.288477"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.794.5L1.15 13.808v40.625l11.644 9.806c11.798 2.801 25.098 1.167 30.273 0l10.867-9.806V13.808L43.844.5z"
                fill="url(#a)"
            />
            <Path
                d="M12.794.25h-.114l-.075.085L.962 13.644l-.062.07V54.55l.089.075 11.644 9.806.045.038.058.014c11.849 2.814 25.19 1.173 30.386 0l.064-.014.048-.044 10.868-9.806.082-.074v-40.82l-.05-.067L44.041.349 43.967.25h-.124z"
                stroke="#c9b0e2"
                strokeOpacity={0.5}
                strokeWidth={0.5}
            />
            <Path
                d="M53.934 13.985C42.127 8.14 9.126 9.792 1.15 13.695v39.6c18.58-7.164 43.635-2.066 52.784 1.378z"
                fill="#2f124c"
            />
            <Path
                d="M53.934 13.985C42.127 8.14 9.126 9.792 1.15 13.695v39.6c18.58-7.164 43.635-2.066 52.784 1.378z"
                fill="url(#b)"
                fillOpacity={0.2}
            />
            <G filter="url(#c)" transform="translate(-18.85 -35.5)">
                <Circle cx={49} cy={65} r={10} fill="#8765a9" fillOpacity={0.5} />
            </G>
            <Path
                d="M53.935 54.673V13.807l-4.167 36.7-6.946 13.89zM1.15 54.673v-40.83L5.317 49.7l6.945 14.002z"
                fill="#833ccb"
            />
            <G filter="url(#d)" transform="translate(-18.85 -35.5)">
                <Path
                    d="M20 49.5L24 85l7 14"
                    stroke="#cb97ff"
                    strokeWidth={0.3}
                    strokeLinecap="round"
                />
            </G>
            <Path
                d="M1.15 14l4 35.5 7 14"
                stroke="#8765a9"
                strokeWidth={0.3}
                strokeLinecap="round"
            />
            <G filter="url(#e)" transform="translate(-18.85 -35.5)">
                <Path
                    d="M72.5 50L69 85.5l-7 14"
                    stroke="#cb97ff"
                    strokeWidth={0.3}
                    strokeLinecap="round"
                />
            </G>
            <Path
                d="M53.65 14.5L50.15 50l-7 14"
                stroke="#8765a9"
                strokeWidth={0.3}
                strokeLinecap="round"
            />
            <Defs>
                <Path
                    id="f"
                    d="M31.399277 55.361881H61.476479V78.66344799999999H31.399277z"
                />
                <LinearGradient
                    id="a"
                    x1={46.392101}
                    y1={36}
                    x2={46.392101}
                    y2={101.286}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-18.85 -35.5)"
                >
                    <Stop stopColor="#704897" />
                    <Stop offset={1} stopColor="#402A55" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={46.3922}
                    y1={53.5285}
                    x2={46.3922}
                    y2={77.407097}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-18.85 -35.5)"
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
                transform="matrix(1.4117 0 0 1.41629 -24.636 -57.133)"
                fontSize="12px"
                fontFamily="Space Grotesk"
                fill="#fff"
                fillOpacity={1}
                strokeWidth={1.00157}
            >
                <TSpan x={31.398438} y={66.115247}>
                    {props.value || "00"}
                </TSpan>
            </Text>
        </Svg>
    )
}

export default SvgCompartmentSelected;
