import './Block.scss'

export const Block = ({ children, className, onClick, big }) => {
  let cls = 'Block'

  if (className) {
    cls += ` ${className}`
  }

  return (
    <div className={cls} onClick={onClick}>{children}</div>
  )
}