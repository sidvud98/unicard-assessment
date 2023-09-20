import '../../styles/index.scss'
import Description from './Description';
import Plus from '../../icons/Plus'
import Input from './Input';
import Agreement from './Agreement';
import { useSelector } from 'react-redux';

const Content = () => {
  const isMobile = useSelector((state) => state.resolution.isMobile)

  return (
    <>
      <div className='content'>
        <div>
          <Description />
          <div className="sub-text">
            1% Cashback  <Plus />  5x Rewards<Plus />  Zero Forex Markup
          </div>
          {!isMobile &&
            <>
              <Input />
              <Agreement />
            </>
          }
        </div>
        <img src={process.env.PUBLIC_URL + '/nx_wave_hero.png'} className='hero-img'></img>
      </div >
    </>
  );
}


export default Content;

