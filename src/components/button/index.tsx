interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
