import React, { ReactNode, useState, useEffect } from "react";

const LI_CLASSNAME = [
  "flex",
  "align-items-center",
  "w-3/4",
  "hover-bg-secondary",
  "p-3",
  "mt-2",
  "cursor-pointer",
].join(" ");

const ACTIVE_CLASSNAME = [
  LI_CLASSNAME,
  "rounded",
  "border",
  "border-solid",
  "border-secondary",
  "text-primary",
  "bg-secondary"
].join(" ");

type Props = {
  options: Option[];
  selected: string;
  onChange: (o: Option) => void;
  placeholder: string;
};

export type Option = {
  label: string | ReactNode;
  value: string;
};

export const Select = ({ onChange, options, selected, placeholder }: Props) => {
  const selectOptions = [{ label: placeholder, value: "" }, ...options];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<Option>(
    options.find(o => o.value === selected) || selectOptions[0]
  );
  const onClick = (option: Option) => {
    if (isOpen) {
      setOption(option);
      setIsOpen(false);
      onChange(option);
    } else {
      setIsOpen(true);
    }
  };
  const getClassName = (o1: Option, o2: Option) => {
    if (o1.value === o2.value) {
      return ACTIVE_CLASSNAME
    } else {
      return (!isOpen && o1.value !== o2.value) ? "hidden" : LI_CLASSNAME;
    }
  }

  useEffect(() => {
    const onDocumentClick = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }
    document.body.addEventListener('click', onDocumentClick)
    return () => document.body.removeEventListener('click', onDocumentClick)
  }, [isOpen])

  return (
    <ul>
      {selectOptions.map((o, i) => (
        <li
          key={i}
          data-value={o.value}
          onClick={(e) => [e.stopPropagation(), onClick(o)]}
          className={getClassName(o, option)}
        >
          {o.label}
        </li>
      ))}
    </ul>
  );
};
