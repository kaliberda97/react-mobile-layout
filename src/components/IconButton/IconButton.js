import './IconButton.scss'

export const IconButton = ({ icon, onClick }) => {
  return (
    <div className="IconButton" onClick={onClick}>
      <i className={`ic-${icon}`} />
    </div>
  )
}