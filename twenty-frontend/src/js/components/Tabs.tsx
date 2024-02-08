import React, { useState, useEffect } from "react";
import classnames from "classnames";

export type Tab = {
  id: string;
  label: string;
};

type Props = {
  defaultLabel: string;
  labels: string[];
  onChange: (t: Tab) => void;
};

export function Tabs({ defaultLabel, labels, onChange }: Props) {
  const tabs = labels.map(label => ({ id: label.toLowerCase(), label }));
  const tab = tabs.find(t => t.id === defaultLabel);
  const [active, setActive] = useState<Tab>(tab);

  useEffect(() => {
    onChange(active);
  }, [active]);

  return (
    <ul className="flex w-3/4">
      {...tabs.map(tab => {
        const isActive = active?.id === tab.id;
        const classNames = {
          "active-item": isActive,
          "inactive-item": !isActive,
        };
        return (
          <li className={classnames(classNames)}>
            <a
              href={location.hash}
              onClick={() => setActive(tab)}
              className="block p-2 text-smaller no-underline"
            >
              {tab.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
