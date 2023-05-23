import {
  ContainerProps,
  PaperProps,
  ButtonProps,
  SelectProps,
  InputProps,
  TextInputProps,
  NumberInputProps,
} from '@mantine/core';

const ContainerDefaultProps: Partial<ContainerProps> = { size: 1148 };
const PaperDefaultProps: Partial<PaperProps> = { radius: 12 };
const ButtonDefaultProps: Partial<ButtonProps> = { radius: 'md' };
const InputDefaultProps: Partial<InputProps> = { radius: 'md' };
const TextInputDefaultProps: Partial<TextInputProps> = { rightSectionWidth: 107 };
const SelectDefaultProps: Partial<SelectProps> = {
  rightSectionWidth: 48,
  transitionProps: { transition: 'fade' },
};
const NumberInputDefaultProps: Partial<NumberInputProps> = {
  rightSectionWidth: 36,
  stepHoldDelay: 500,
  min: 0,
  max: 1e8,
  stepHoldInterval: (t) => Math.max(1000 / t ** 2, 25),
};

export {
  ContainerDefaultProps,
  PaperDefaultProps,
  ButtonDefaultProps,
  InputDefaultProps,
  SelectDefaultProps,
  TextInputDefaultProps,
  NumberInputDefaultProps,
};
