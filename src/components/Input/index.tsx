import React, { ReactElement } from 'react';
import clsx from 'clsx';


interface InputProps {
  type: string;
  classes?: string | string[];
  placeholder?: string;
}


const Input: React.FC<InputProps> = ({
  type, classes, placeholder,
}: InputProps): ReactElement<InputProps> => (
  <input
    className={clsx(classes)}
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
