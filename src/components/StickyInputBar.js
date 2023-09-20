import '../styles/index.scss'
import Input from './PhoneNumber/Input'
import Agreement from './PhoneNumber/Agreement'
import { useSelector } from 'react-redux'

const StickyInputBar = (props) => {
  const isMobile = useSelector((state) => state.resolution.isMobile)
  return (
    <>{
      isMobile ?
        <div className="sticky-input-mobile">

        </div> :
        <div id="stubborn-input" className="sticky-input">
          <Input />
          <Agreement />
        </div>
    }</>
  )
}

export default StickyInputBar;

