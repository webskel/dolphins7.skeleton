import { ReactNode, useState, useEffect } from "react";

const LI_CLASSNAME = [
  "flex",
  "align-items-center",
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
  "bg-secondary",
].join(" ");

type Props = {
  options: Option[];
  selected: string;
  onChange: (o: Option) => void;
  placeholder: string;
  className?: string;
  isFilterable?: boolean;
};

export type Option = {
  id: number;
  label: string | ReactNode;
  value: string;
};

export const Select = ({
  onChange,
  options,
  selected,
  placeholder,
  className,
  isFilterable = true,
}: Props) => {
  const selectOptions = [
    { id: null, label: placeholder, value: "" },
    ...options,
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>(null);
  const [option, setOption] = useState<Option>(
    options.find(o => String(o.id) === selected) || selectOptions[0],
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
      return ACTIVE_CLASSNAME;
    } else {
      return !isOpen && o1.value !== o2.value ? "hidden" : LI_CLASSNAME;
    }
  };

  useEffect(() => {
    const onDocumentClick = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", onDocumentClick);
    return () => document.body.removeEventListener("click", onDocumentClick);
  }, [isOpen]);

  return (
    <ul className={className}>
      {isFilterable && isOpen && (
        <li className="flex">
          <FilterInput onTextChange={text => setFilterText(text)} />
        </li>
      )}
      {selectOptions
        .filter(o => {
          if (filterText === null) {
            return true;
          } else {
            const regexp = new RegExp(filterText);
            return regexp.test(o.value);
          }
        })
        .map((o, i) => (
          <li
            key={i}
            data-value={o.value}
            onClick={e => [e.stopPropagation(), onClick(o)]}
            className={getClassName(o, option)}
          >
            {o.label}
          </li>
        ))}
    </ul>
  );
};

type FilterInputProps = { onTextChange: (text: string) => void };
function FilterInput({ onTextChange }: FilterInputProps) {
  return (
    <input
      className="p-3 rounded border-secondary border-solid outline-none"
      onClick={e => e.stopPropagation()}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value: text },
        } = e;
        onTextChange(text);
      }}
      type="text"
      placeholder="Filter by text"
    />
  );
}
