import React from "react";
import Image from "next/image";

/**
 * @typedef {{size:"xsm"|"sm"|"md"|"lg", width:number|string, height:number|string}} SpinnerProps
 *
 * @type {import("react").ComponentType<SpinnerProps>}
 */
export const Spinner = (props) => {
  const { size = "sm", width, height } = props || {};

  return (
    <Image
      {...(size === "xsm"
        ? { src: "/images/spinner.svg", height: 30, width: 30 }
        : size === "sm"
        ? { src: "/images/spinner.svg", height: 50, width: 50 }
        : {})}
      {...(height ? { height } : {})}
      {...(width ? { width } : {})}
    />
  );
};
