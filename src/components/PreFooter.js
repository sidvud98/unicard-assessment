import '../styles/index.scss';
import Appstore from '../icons/Appstore';
import Playstore from '../icons/Playstore';
import SBM from '../icons/SBM';
import { useSelector } from 'react-redux';

const PreFooter = () => {
  const isMobile = useSelector((state) => state.resolution.isMobile);
  return (
    <div className='pre-footer'>
      <div className="commitment">
        <div className="major">At Uni, we're committed to <span className='grad'>delivering an unmatched credit experience</span> for millions of Indians.</div>
        <div className="sub">On this mission, we've partnered with some of the best in the business.</div>
        <div className="bank">
          <SBM />
        </div>
      </div>
      <div className="note">
        <div className='note-text'>
          Please note that to stay compliant with RBI guidelines, we have discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </div>
      </div>
      <div className="download">
        <div className="download-wrapper">
          <div className='text'>Download now to get started</div>
          <div className="stores">
            <a className="store rounded-xl" href='https://unicards.onelink.me/KRuW/'>
              <Playstore isMobile={isMobile} />
              <span>Google Play</span>
            </a>
            <a className="store rounded-xl" href='https://uni-growth.onelink.me/v6cm/'>
              <Appstore isMobile={isMobile} />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default PreFooter;

