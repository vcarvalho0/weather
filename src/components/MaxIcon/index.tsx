type MaxIconProps = {
  width?: number
  height?: number
  className: string
}

export const MaxIcon = ({
  height = 12,
  width = 8,
  className,
}: MaxIconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.37607 0.652781C4.17959 0.458751 3.86301 0.460743 3.66898 0.65723L0.507086 3.85917C0.313056 4.05566 0.315048 4.37223 0.511535 4.56626C0.708022 4.76029 1.0246 4.7583 1.21863 4.56181L4.0292 1.71564L6.87537 4.52622C7.07186 4.72025 7.38843 4.71826 7.58246 4.52177C7.77649 4.32528 7.7745 4.00871 7.57801 3.81468L4.37607 0.652781ZM4.58767 11.0052L4.52474 1.00541L3.52476 1.0117L3.58769 11.0115L4.58767 11.0052Z"
        fill="#E2251A"
      />
    </svg>
  )
}
