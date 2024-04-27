import React from "react";

type Props = {
  onTextChange: (text: string) => void;
  placeholder: string;
};

export function Filter({ onTextChange, placeholder }: Props) {
  return (
    <input
      type="text"
      className="p-3 rounded border-secondary border-solid outline-none"
      autoFocus={true}
      placeholder={placeholder}
      onClick={e => e.stopPropagation()}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value: text },
        } = e;
        onTextChange(text);
      }}
    />
  );
}
