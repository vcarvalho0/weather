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
    weatherIcon: 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
    country: 'Brazil',
    city: 'São Paulo',
    minTemperature: 14,
    maxTemperature: 24,
  },
}
