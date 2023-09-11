function Button({ buttonType, buttonText, isDisabled}) {
    return (
       <button
           type={buttonType}
           disabled={isDisabled}
       >
           {buttonText}
       </button>
   )
}

export default Button;