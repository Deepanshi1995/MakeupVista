import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#2A2A2A"
      d="M15.5 19.75a.744.744 0 0 1-.53-.22l-7-7a.75.75 0 0 1 0-1.061l7-7a.75.75 0 1 1 1.061 1.061L9.561 12l6.47 6.47a.75.75 0 0 1-.531 1.28Z"
    />
  </Svg>
);