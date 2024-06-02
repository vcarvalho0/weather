import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['default', 'sm', 'xs'],
      control: {
        type: 'inline-radio',
      },
    },
    colors: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    size: 'default',
    colors: 'primary',
    children: 'Click here',
  },
}
