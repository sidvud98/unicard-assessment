import { useDispatch, useSelector } from 'react-redux';
import { inputActions } from '../../store/input'
import ClearCross from '../../icons/ClearCross'
import Validated from '../../icons/Validated'
import Warn from '../../icons/Warn'
import '../../styles/phone-number.scss'

const Input = () => {
  const agreed = useSelector((state) => state.input.agreed)
  const phoneNumber = useSelector((state) => state.input.phoneNumber)
  const validator = useSelector((state) => state.input.validator)
  const dispatch = useDispatch();
  const inputHandler = (event) => {
    dispatch(inputActions.phoneNumber(event.target.value))
  }
  const clearNumber = () => {
    dispatch(inputActions.clearPhoneNumber())
  }

  return (
    <div className='input rounded-xl'>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        className='input-field'
        onChange={inputHandler}
        maxlength="10" />
      {validator === 'okay' ? <Validated /> :
        validator === 'warn' ? <Warn /> :
          validator === 'clear' ? <div onClick={clearNumber} className='clear'><ClearCross /></div> :
            null
      }
      <div className={`apply rounded-xl ${agreed && (validator === 'okay') ? '' : 'disabled'}`}>Apply Now</div>
    </div>
  );
};

export default Input;

