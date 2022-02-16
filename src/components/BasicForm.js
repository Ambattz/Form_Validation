import useInput from '../Hooks/useInput'

const BasicForm = (props) => {
  const {
    input: fnameInput,
    inputIsValid: fnameIsValid,
    inputIsInvalid: fnameIsInvalid,
    inputStyle: fnameStyle,
    onChangeHandler: fnameChangeHandler,
    onBlurHandler: fnameBlurHandler,
    reset: fnameReset
  } = useInput((value) => value.trim() !== '');

  const {
    input: lnameInput,
    inputIsValid: lnameIsValid,
    inputIsInvalid: lnameIsInvalid,
    inputStyle: lnameStyle,
    onChangeHandler: lnameChangeHandler,
    onBlurHandler: lnameBlurHandler,
    reset: lnameReset
  } = useInput((value) => value.trim() !== '');

  const {
    input: emailInput,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputStyle: emailStyle,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (fnameIsValid && emailIsValid && lnameIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Submitted Form");
    console.log(fnameInput, lnameInput, emailInput);
    fnameReset();
    lnameReset();
    emailReset();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={fnameStyle}>
        <label htmlFor='name'>First Name</label>
        <input type='text' id='name'
          onChange={fnameChangeHandler}
          onBlur={fnameBlurHandler}
          value={fnameInput} />
        {fnameIsInvalid && <p className='error-text'>Enter Valid First Name</p>}
      </div>
      <div className={lnameStyle}>
        <label htmlFor='name'>Last Name</label>
        <input type='text' id='name'
          onChange={lnameChangeHandler}
          onBlur={lnameBlurHandler}
          value={lnameInput} />
        {lnameIsInvalid && <p className='error-text'>Enter Valid Last Name</p>}
      </div>
      <div className={emailStyle}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInput} />
        {emailIsInvalid && <p className='error-text'>Enter Valid E-Mail Address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
