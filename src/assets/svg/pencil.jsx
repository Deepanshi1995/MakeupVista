import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const PencilIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.838}
      clipPath="url(#a)"
    >
      <Path d="M4.246 10.378H2.213a.364.364 0 0 1-.364-.364V7.982a.36.36 0 0 1 .104-.254l5.459-5.459a.364.364 0 0 1 .518 0L9.96 4.297a.365.365 0 0 1 0 .518L4.5 10.274a.36.36 0 0 1-.255.104v0ZM6.215 3.465l2.547 2.547" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.03.553h11.643v11.644H.03z" />
      </ClipPath>
    </Defs>
  </Svg>
);