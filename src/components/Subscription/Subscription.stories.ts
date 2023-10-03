import type { Meta, StoryObj } from '@storybook/react';

import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

const meta = {
    title: 'form/Subscription',
    //   component: Large,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //   size: 'medium',
    // },
}; //satisfies Meta<typeof Large>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySubscription: Story = {
  render: (args) => {
        <Large />
        <Primary />
  },
//   args: {
//     size: 'small',
//     placeholder: 'Small Text',
//   },
};

