import React, { useState } from "react";
import Select, { ValueType } from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
type ValType = ValueType<
  {
    value: string;
    label: string;
  },
  false
>;

export const ReactSelectBoxComponent = () => {
  const [selectedValue, setSelectedValue] = useState<ValType | undefined>({
    value: "chocolate",
    label: "Chocolate",
  });

  return (
    <Select
      value={selectedValue}
      onChange={(b) => {
        setSelectedValue(b);
      }}
      options={options}
    />
  );
};
