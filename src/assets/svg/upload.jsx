import * as React from "react"
import Svg, { Path } from "react-native-svg";

export const Upload = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.75 11.835v3a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-3m10.5-5.25L9 2.835m0 0-3.75 3.75M9 2.835v9"
    />
  </Svg>
);