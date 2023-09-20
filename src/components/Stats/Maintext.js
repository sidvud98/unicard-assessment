import '../../styles/index.scss'


const Gr = (props) => {
  return (
    <span
      className='grayed'
      style={{ marginLeft: props.colon ? '0' : undefined }}>
      {props.children}
    </span>
  )
}

const Maintext = (props) => {
  return (
    <div className="main-text">
      <div id="a1">{'Earn 1% assured cashback'}<Gr>{' on your spends. Get '}</Gr>{'5X'}</div>
      <div id="a2">{'more value than cashback '}<Gr>{'at the Uni Store. Enjoy'}</Gr></div>
      <div id="a3"><Gr>{'round the clock '}</Gr>{'Whatsapp support. '}<Gr>{'And it\'s'}</Gr></div>
      <div id="a4">{'lifetime free'}<Gr colon={true}>{'; no joining fee, no annual charges.'}</Gr></div>
    </div>
  )
}

export default Maintext;

