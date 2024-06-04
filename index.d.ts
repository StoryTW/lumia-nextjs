declare module '*.svg' {
  const StaticImageData: import('next/image').StaticImageData;
  export default StaticImageData;
}

declare module '*.svg?svgr' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
