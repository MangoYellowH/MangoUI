import React, { ReactElement } from 'react';


interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
}: ButtonProps): ReactElement<ButtonProps> => (
  <div>{text}</div>
);

export default Button;
