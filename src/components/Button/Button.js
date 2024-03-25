import './Button.scss'

export const Button = (props) => {
  const { onClick, children, className } = props
  let cls = "Button"

  if (className) {
    cls += ` ${className}`
  }

  return (
    <div className={cls} onClick={onClick}>
      <span>{children}</span>
    </div>
  )
}