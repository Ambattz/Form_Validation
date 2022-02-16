import { useState } from 'react'

const useInput = (validateInput) => {
    const [input, setInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    let inputIsValid = validateInput(input);
    let inputIsInvalid = !inputIsValid && isTouched;

    let inputStyle = inputIsInvalid ? 'form-control invalid' : 'form-control ';

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }
    const onBlurHandler = (e) => {
        setIsTouched(true);
    }
    const reset = () => {
        setInput('');
        setIsTouched(false);
    }

    return {
        input,
        inputIsValid,
        inputIsInvalid,
        inputStyle,
        onChangeHandler,
        onBlurHandler,
        reset
    };
}

export default useInput