import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <Rect width={48} height={48} fill="url(#a)" rx={24} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M24 15v18m-9-9h18"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={48}
        y1={24}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#511069" />
        <Stop offset={1} stopColor="#B84087" />
      </LinearGradient>
    </Defs>
  </Svg>
)