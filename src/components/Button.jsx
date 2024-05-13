const Button = ({ children, onClick, className,disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`font-[500] text-sm flex justify-center rounded h-10 items-center hover:opacity-[0.9] ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;