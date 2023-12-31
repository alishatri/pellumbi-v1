import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  disabled,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      className="
          w-full
          p-4
          text-lg
          bg-black
          border-2
          border-neutral-800
          rounded-md
          outline-none
          text-white
          focus:border-sky-500
          focus:border-2
          transition
          disbled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
          "
    ></input>
  );
};

export default Input;
