import './button.css';

function Button({functionButton, disabled, textButton}) { 
    return(
    <>
    <button onClick={functionButton} disabled={disabled}>
        {textButton}
    </button> 
    </>
    )
}

export default Button;