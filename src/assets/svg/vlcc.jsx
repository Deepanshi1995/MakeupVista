import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

export const VLCC = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      stroke="#B84087"
      strokeOpacity={0.5}
      d="M17 33c8.837 0 16-7.163 16-16S25.837 1 17 1 1 8.163 1 17s7.163 16 16 16Z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01389)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={72}
        height={72}
        preserveAspectRatio="none"
      />
    </Defs>
  </Svg>
)
