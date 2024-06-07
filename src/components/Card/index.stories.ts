import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    weatherIcon: '/api/something',
    day: 'Segunda-feira',
    minTemperature: 14,
    maxTemperature: 24,
  },
}
