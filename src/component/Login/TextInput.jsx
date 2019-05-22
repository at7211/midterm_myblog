import React from 'react';

function TextInput({
  placeholder,
  type,
  input: {
    name,
    onChange,
    value,
  }
}) {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
    </>
  )
}

export default TextInput;
