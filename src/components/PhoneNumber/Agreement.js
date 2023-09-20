import '../../styles/index.scss'
import { inputActions } from '../../store/input'
import { useDispatch, useSelector } from 'react-redux';

const Agreement = () => {
  const dispatch = useDispatch();
  const ticked = useSelector((state) => state.input.agreed)
  return (
    <>
      <form className='agreement' onClick={() => dispatch(inputActions.agreed())}>
        <input type="checkbox" checked={ticked} ></input>
        <div className="text">
          You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
        </div>
      </form >
    </>
  );
}


export default Agreement;

