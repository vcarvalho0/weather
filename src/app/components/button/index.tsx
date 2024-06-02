import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
    },
    colors: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-blue-600 text-white',
    },
  },
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles>

export const Button = ({ size, colors, ...props }: ButtonProps) => {
  return <button {...props} className={buttonStyles({ size, colors })} />
}
