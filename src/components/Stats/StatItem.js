import { useSelector } from 'react-redux'
import '../../styles/index.scss'

const StatItem = (props) => {
  const isMobile = useSelector((state) => state.resolution.isMobile);
  const imgStyle =
    (isMobile ? { marginRight: 'undefined' } :
      props.horizontalReverse ? { marginRight: '170px' } :
        { marginLeft: '170px' });




  return (
    <div className="stat-item" style={{ flexDirection: !isMobile && props.horizontalReverse ? 'row-reverse' : undefined }}>
      <div className="text-part">
        <span className="black-text">
          {props.blackText}
        </span>
        <span className="gray-text">
          {props.grayedText}
        </span>
        <div className='condition'>
          {props.condition}
        </div>
      </div>
      <div className="img-part">
        <img src={props.imageURl} alt="" style={imgStyle} />
      </div>
    </div>
  )
}

export default StatItem;

