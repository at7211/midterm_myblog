import React from 'react';

function TextInput({
  placeholder,
  type,
  input: {
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
