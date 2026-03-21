import React from "react";

export default function Image({
  src,
  alt = "",
  width,
  height,
  fill,
  style,
  className,
  loading,
  priority,
  ...props
}) {
  const imgStyle = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style
      }
    : style;

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={imgStyle}
      loading={priority ? "eager" : loading}
      {...props}
    />
  );
}
