import classNames from "classnames"
import PropTypes from "prop-types"

const Button = ({children, btnType, size="medium", handleClick, ...rest}) => {

  const baseClasses=`flex items-center justify-center font-semibold rounded bg-black-one ${rest.className}`;

  const variants = {
    "bg-blue-three text-white": btnType === "primary",
    "bg-gray-one text-white": btnType === "passive",
    "bg-green-two text-white": btnType === "success",
    "bg-red-one text-white": btnType === "danger",
    "bg-transparent text-black border border-black-one": btnType === "outline",
    "p-1.5": size === 'circle',
    "px-2 py-1 text-sm w-fit": size === 'small',
    "px-4 py-1 text-md w-fit": size === 'medium',
    "px-6 py-2 text-lg w-fit": size === 'large',  
    "px-2 py-1 text-lg w-full": size === 'full',  

  }

  const btnClasses = classNames(baseClasses, variants)

  return <button onClick={handleClick} className={btnClasses}>{children}</button>
}

Button.propTypes = {
  btnType: PropTypes.oneOf(['primary', 'passive', 'success', 'danger', 'outline']),
  size: PropTypes.oneOf(["small", "medium", "large", "circle", "full"]),
}

export default Button