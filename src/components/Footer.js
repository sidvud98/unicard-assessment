import PCI from "../icons/PCI";
import UniDot from "../icons/UniDot"

const Footer = () => {
  const sbmURL = 'https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php';
  const mailURL = 'mailto: care@uni.club';
  const phoneNum = 'tel: 080 68216821';

  const mediaHandles = [
    'Instagram',
    'LinkedIn',
    'Twitter',
    'Facebook',
    'Careers',
  ];

  const creditCardCaps = [
    'Credit Card KFS',
    'Credit Card T&Cs',
    'Uni T&Cs',
    'Lending Partner TnCs',
  ];

  const mediaURLs = [
    'https://www.instagram.com/uni_cards/',
    'https://www.linkedin.com/company/uni-cards',
    'https://twitter.com/cards_uni',
    'https://www.facebook.com/Uni-Cards-104179288358904',
    'https://careers.uni.cards/',
  ];

  const creditURLs = [
    'https://www.uni.cards/credit-card-key-facts',
    'https://www.uni.cards/docs/Credit_Card_MITC.pdf/',
    'https://www.uni.cards/privacy-policy-main/',
    'https://www.uni.cards/nbfc-terms/',
  ];


  const renderHandles = mediaHandles.map((handleItem, index) => {
    return (
      <a className="social-media-item" href={mediaURLs[index]}>
        {handleItem}
      </a>
    )
  })
  const renderCreditLinks = creditCardCaps.map((creditCardItem, index, arr) => {
    return (
      <a className="credit-card-item" href={creditURLs[index]}>
        {creditCardItem}
        {(index !== arr.length - 1) ? <div className="separator">|</div> : null}
      </a>
    )
  })


  return (
    <div className='footer'>
      <div className="security-standards">
        <div className="security-standards-wrapper">
          <span>Uni maintains the highest level of security standards</span>
          <PCI />
        </div>
      </div>

      <div className="contacts">
        <div className="uni-dot">
          <UniDot />
        </div>
        <div className="address">
          Indiqube Sigma No.3/B, Nexus<br /> Koramangala 3rd Block SBI Colony,<br /> Koramangala, Bengaluru, Karnataka<br /> 560034
          <br /><br />
          Contact Us: <a href={phoneNum}>080 68216821</a><br />Email: <a href={mailURL}>care@uni.club</a>
        </div>
        <div className="grievances">
          <div className="border top"></div>
          <a href={sbmURL}><span>Grievance Redressal Mechanism</span> - SBM Bank India</a>
          <div className="border bottom"></div>
        </div>
        <div className="wrapper">
          <div className="social-media">
            {renderHandles}
          </div>
          <div className="credit-cards">
            {renderCreditLinks}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

