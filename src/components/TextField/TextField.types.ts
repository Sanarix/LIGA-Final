import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  containerClassName?: string;
  inputClassName?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
}
