import React from "react";
import Select from "react-select";
import { useField } from "formik";

const CustomSelect = ({ label,cols, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={"my-2 " + cols || undefined}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Select
        {...field}
        {...props}
        onChange={(option) => {
          props?.onChange(option);
          field.onChange({
            target: {
              name: field.name,
              value: option.value,
            },
          });
        }}
        onBlur={() => field.onBlur(field.name)}
        value={props.options ? props.options.find((option) => option.value === field.value) : ""}
        className={`mt-1 ${meta.touched && meta.error ? "border-red-500" : ""}`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomSelect;