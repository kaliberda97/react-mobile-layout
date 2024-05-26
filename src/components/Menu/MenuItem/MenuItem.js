import './MenuItem.scss'

export const MenuItem = ({ icon, onClick, isActive }) => {
  const cls = isActive ? "MenuItem active" : "MenuItem"

  return (
    <div className={cls} onClick={onClick}>
      <i className={`ic-${icon}`} />
      {isActive && (
        <div className="MenuItem__dot"></div>
      )}
    </div>
  )
}