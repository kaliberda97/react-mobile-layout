import './Actions.scss'
import { Block } from "../Block/Block";

export const Actions = () => {
  const onCopy = () => {
    alert('COPY CARD NUMBER')
  }
  const onShow = () => {
    alert('SHOW CVV')
  }

  return (
    <div className="Actions">
      <Block className="action" onClick={onCopy}>
        <i className="ic-copy" />
        <span>COPY CARD NUMBER</span>
      </Block>
      <Block className="action" onClick={onShow}>
        <i className="ic-show" />
        <span>SHOW CVV</span>
      </Block>
    </div>
  )
}

// added design

// finish