import type { CSSProperties } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  [key: string]: unknown;
};

const Image = ({ src, alt, width, height, fill, ...props }: ImageProps) => {
  const style: CSSProperties = fill
    ? { objectFit: "cover", width: "100%", height: "100%" }
    : {};

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      {...props}
    />
  );
};

export default Image;
