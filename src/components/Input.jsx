const Input = ({ value, setValue, label, placeholder, className, type, defaultValue, isSm }) => {
  return (
    <div className={className}>
      {label && <div className={`text-[#626262] font-[500] ${isSm ? 'text-sm' : 'sm:text-base text-sm'} mb-1`}>{label}</div>}
      <input
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`outline-none rounded-lg border border-[#bcbcbc] focus:border-primary ${isSm ? 'h-10' : 'h-12'} h-12 px-2 w-full`}
        placeholder={placeholder}
        type={type ? type : 'text'}
      />
    </div>
  )
}

export default Input;