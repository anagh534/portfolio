import React from "react";

export default function Link({ href = "#", children, ...props }) {
  const resolvedHref = typeof href === "string" ? href : href?.pathname || "#";
  return (
    <a href={resolvedHref} {...props}>
      {children}
    </a>
  );
}
