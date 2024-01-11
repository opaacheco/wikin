import React from "react";

import { InputContainer } from "./styles";

const input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default input;
