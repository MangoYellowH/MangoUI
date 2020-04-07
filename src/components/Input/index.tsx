import React, { ReactElement } from 'react';


interface InputProps {
  type: string;
  classes?: string | string[];
}


const Input: React.FC<InputProps> = ({
  type,
}: InputProps): ReactElement<InputProps> => (
  <input
    type={type}
  />
);

export default Input;
