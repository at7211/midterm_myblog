import React from 'react';

function TextInput({
  placeholder,
  type,
  input: {
    name,
    onChange,
    value,
  },
  className,
}) {
  return (
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange} />
  )
}

export default TextInput;
