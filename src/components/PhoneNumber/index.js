import '../../styles/index.scss'
import Header from './Header';
import Content from './Content';

const PhoneNumber = () => {
  const bgVidURL = process.env.PUBLIC_URL + '/nxt_wave_bg.mp4';
  return (
    <div className='phone-number'>
      <video autoPlay loop muted id='bg-video' >
        <source src={bgVidURL} type="video/mp4" />
      </video>
      <Header />
      <Content />
    </div>
  );
};


export default PhoneNumber;

