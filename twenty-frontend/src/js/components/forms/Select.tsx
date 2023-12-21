import React, { forwardRef, Ref } from "react";

type Props = {
  children: JSX.Element[];
};

const Select = forwardRef(function (
  { children, ...rest }: Props,
  ref: Ref<HTMLSelectElement>,
) {
  return (
    <select ref={ref} {...rest}>
      {...children}
    </select>
  );
});

export { Select };
