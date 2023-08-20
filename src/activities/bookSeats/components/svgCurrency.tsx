import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgCurrency(props) {
  return (
    <Svg
      width={30}
      height={31}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_174_16687)">
        <Path
          d="M8.913 11.025L15 22.143l6.087-11.118L15 5.967l-6.087 5.058z"
          fill="#FFF480"
        />
        <Path d="M21.087 11.025L15 22.143V5.967l6.087 5.058z" fill="#FFE566" />
        <Path
          d="M26.408 10.01v-.018a.86.86 0 00-.299-.492L15.562.711A.863.863 0 0015 .501l-1.758 4.402L15 8.253l3.85 3.198 3.442 1.102 4.116-2.543zM15 30.5l1.758-7.035L15 18.483l-3.85-7.032-3.335-2.394-4.223.953a.85.85 0 00.088.58l10.546 19.488c.159.281.457.422.774.422z"
          fill="#FFC24D"
        />
        <Path
          d="M15 8.252V.5a.863.863 0 00-.563.21L3.891 9.5a.859.859 0 00-.3.492v.018l7.56 1.441L15 8.252z"
          fill="#FFE566"
        />
        <Path
          d="M26.408 10.01L18.85 11.45 15 18.483V30.5c.316 0 .615-.14.773-.422L26.32 10.59a.85.85 0 00.088-.58z"
          fill="#FF9833"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_174_16687">
          <Path
            fill="#fff"
            transform="matrix(1 0 0 -1 0 30.5)"
            d="M0 0H30V30H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgCurrency;
