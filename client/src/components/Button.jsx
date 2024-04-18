const Button = ({ children, className, type }) => {
  return (
    <button
      type={type}
      className={`${className}  text-sm button rounded-md flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
