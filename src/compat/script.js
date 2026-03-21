import React from "react";

export default function Script({ id, type = "text/javascript", dangerouslySetInnerHTML, ...props }) {
  return (
    <script
      id={id}
      type={type}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...props}
    />
  );
}
