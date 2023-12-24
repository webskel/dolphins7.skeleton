import React from "react";

type Props = {
  children: JSX.Element[];
  className?: string;
};

const Select = function ({ children, className, ...rest }: Props) {
  return (
    <select className={className} {...rest}>
      {...children}
    </select>
  );
};

export { Select };
