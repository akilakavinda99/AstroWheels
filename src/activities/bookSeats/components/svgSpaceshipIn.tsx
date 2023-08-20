import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgSpaceshipIn(props) {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 343 833"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.65}
        d="M103.1 61.376L8.37 285.738a101.723 101.723 0 00-7.935 43.499l15.968 412.896c1.383 35.759 21.441 68.857 56.021 78.07 48.698 12.973 118.181 19.781 195.749.396 38.667-9.663 62.649-46.385 63.676-86.229l10.413-403.852c.405-15.728-2.855-31.312-8.83-45.867-18.865-45.951-50.497-130.606-95.003-223.275-53.041-110.444-112.32-46.018-135.329 0z"
        fill="#261636"
      />
    </Svg>
  )
}

export default SvgSpaceshipIn
