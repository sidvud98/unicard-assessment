import '../../styles/phone-number.scss'
import Uni from '../../icons/Uni'
import Cross from '../../icons/Cross'
import Sandwich from '../../icons/Sandwich'
import Goto from '../../icons/Goto'
import { useSelector } from 'react-redux';
import { useState } from 'react';



const Header = () => {
  const isMobile = useSelector((state) => state.resolution.isMobile)
  const [isPaycheckVisible, setPaycheckVisibility] = useState(false)

  const paycheckHandler = () => {
    setPaycheckVisibility((prevState) => { return !prevState })
  }

  return (
    <>
      <div className='header'>
        <div className='uni-wrapper'>
          <Uni />
        </div>
        {isMobile ?
          <div className='mob-paycheck-toggle' onClick={paycheckHandler}>
            {isPaycheckVisible ? <Cross /> : <Sandwich />}
          </div> :
          <a
            className='paycheck-btn rounded-xl'
            href='https://paychek.uni.club/'>
            Uni Paycheck
          </a>}
      </div >
      <a
        className={`mob-paycheck-link ${isPaycheckVisible ? 'active' : null}`}
        href='https://paychek.uni.club/'>
        <div>Uni Paycheck</div>
        <Goto />
      </a >
    </>
  );
}


export default Header;

