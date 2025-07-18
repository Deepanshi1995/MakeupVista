import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const UploadWhite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 9.161v2.667a1.333 1.333 0 0 1-1.333 1.333H2.833A1.333 1.333 0 0 1 1.5 11.828V9.16m9.333-4.667L7.5 1.161m0 0L4.167 4.494M7.5 1.161v8"
    />
  </Svg>
)