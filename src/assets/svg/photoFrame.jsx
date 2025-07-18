import * as React from "react"
import Svg, { Rect } from "react-native-svg";

export const PhotoFrame = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={250}
    height={250}
    fill="none"
    {...props}
  >
    <Rect
      width={125.651}
      height={147.696}
      x={76.674}
      y={27.992}
      fill="#ECEEF3"
      stroke="#C6C5C5"
      strokeDasharray="5.88 5.88"
      strokeWidth={0.735}
      rx={5.633}
    />
    <Rect
      width={143.163}
      height={168.279}
      x={47.725}
      y={17.044}
      fill="#ECEEF3"
      stroke="#C6C5C5"
      strokeDasharray="6.7 6.7"
      strokeWidth={0.837}
      rx={5.581}
    />
    <Rect
      width={171}
      height={201}
      x={0.807}
      y={1.125}
      fill="#ECEEF3"
      stroke="#C6C5C5"
      strokeDasharray="8 8"
      rx={5.5}
    />
  </Svg>

)