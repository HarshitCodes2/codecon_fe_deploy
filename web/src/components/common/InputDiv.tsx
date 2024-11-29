import React from "react";

interface InputDivProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
}

export const InputDiv: React.FC<InputDivProps> = ({
  placeholder,
  onChange,
  type = "text",
  className,
}) => {
  return (
    <>
      <div>
        <input
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </div>
    </>
  );
};
