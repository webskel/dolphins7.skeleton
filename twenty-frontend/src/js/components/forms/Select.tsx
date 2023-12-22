import React, { forwardRef, Ref } from "react";

type Props = {
  children: JSX.Element[];
  className?: string;
};

const Select = forwardRef(function (
  { children, className, ...rest }: Props,
  ref: Ref<HTMLSelectElement>,
) {
  return (
    <select className={className} {...rest} ref={ref}>
      {...children}
    </select>
  );
});

export { Select };
