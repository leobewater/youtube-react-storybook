import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   size: 'medium',
  // },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small Text',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    placeholder: 'Medium Text',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large Text',
  },
};
