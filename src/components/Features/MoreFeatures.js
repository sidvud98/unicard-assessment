import '../../styles/index.scss';
import PCI from '../../icons/PCI'



const MFItem = (props) => {
  const imgURLPrefix = process.env.PUBLIC_URL;

  return (
    <div className="mf-item" style={{ flexDirection: props.horizontalReverse ? 'row-reverse' : undefined }}>
      <div className="img-part">
        <img src={imgURLPrefix + props.imgSource} className='img' />
      </div>
      <div className='text-part' style={props.horizontalReverse ? { marginLeft: '30px' } : { marginRight: '30px' }}>
        <div className="major">{props.mT}</div>
        <div className="sub">
          {(props.sT === undefined) ?
            <div className='pic'><PCI /></div> :
            <div className="text">{props.sT}</div>
          }
        </div>
      </div>
    </div>
  );
}


const MoreFeatures = () => {

  const majorTexts = [
    'Help, just a WhatsApp away. Anytime, Anyday.',
    'No hidden charges, no last minute surprises.',
    'Super secure. Because we care about your money.'
  ];
  const subTexts = [
    'During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.',
    '100% money back guarantee if a charge is applied without your knowledge.',
    undefined
  ];

  return (
    <div className="more-features">
      <div className="more-features-wrapper">
        <MFItem imgSource={'whatsapp_bubble.webp'} mT={majorTexts[0]} sT={subTexts[0]} horizontalReverse={false} />
        <MFItem imgSource={'rupee_bubble.webp'} mT={majorTexts[1]} sT={subTexts[1]} horizontalReverse={true} />
        <MFItem imgSource={'antivirus_bubble.webp'} mT={majorTexts[2]} sT={subTexts[2]} horizontalReverse={false} />
      </div>
    </div>
  );
};

export default MoreFeatures;

