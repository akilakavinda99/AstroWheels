import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LoginScreenSuccessSvg = ({props}:any) => {
    return(
        <Svg
        width={72}
        height={72}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M29.439 47.712L27 56.25l-2.439-8.538a13.5 13.5 0 00-9.27-9.27L6.75 36l8.538-2.439a13.5 13.5 0 009.27-9.27L27 15.75l2.439 8.538a13.5 13.5 0 009.27 9.27L47.25 36l-8.538 2.439a13.5 13.5 0 00-9.27 9.27l-.003.003zm25.338-21.567L54 29.25l-.777-3.105a10.125 10.125 0 00-7.365-7.368L42.75 18l3.108-.777a10.124 10.124 0 007.365-7.368L54 6.75l.777 3.105a10.125 10.125 0 007.368 7.368L65.25 18l-3.105.777a10.125 10.125 0 00-7.368 7.368zm-4.095 35.556L49.5 65.25l-1.182-3.549a6.751 6.751 0 00-4.269-4.269L40.5 56.25l3.549-1.182a6.751 6.751 0 004.269-4.269L49.5 47.25l1.182 3.549a6.751 6.751 0 004.269 4.269L58.5 56.25l-3.549 1.182a6.751 6.751 0 00-4.269 4.269z"
          stroke="#0BE9A6"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
}
export default LoginScreenSuccessSvg