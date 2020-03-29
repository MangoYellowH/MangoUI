import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

enum ButtonType {
  default = 'default',
  primary = 'primary',
  error = 'error',
}

interface ButtonProps {
  type?: string | ButtonType;
  classes?: string | string[];
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children, onClick, type = 'default', classes, disabled,
}: ButtonProps): ReactElement<ButtonProps> => (
  <div
    className={clsx('Button', type, disabled && 'disabled', classes)}
    role="button"
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex={0}
  >
    {children}
  </div>
);

export default Button;
