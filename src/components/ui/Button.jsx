const sizes = {
  "medium": "py-3.5 px-7",
  "large": "py-4.5 px-10",
};

const Button = ({ description, type = "button", disabled, onClick, className = "", size = "medium" }) => {
  return (
    <button
      className={`rounded-full text-sm font-semibold text-white bg-green-400 focus-visible:outline-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-green-700 cursor-pointer transition-colors duration-100 disabled:bg-gray-500 disabled:cursor-not-allowed ${sizes[size]} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {description}
    </button>
  );
};

export default Button;
