import { Button } from '../Button/Button'
import './BalanceCard.scss'

export const BalanceCard = () => {
  const onClick = () => {
    alert('Add money')
  }

  return (
    <div className="BalanceCard">
      <div className="BalanceCard__label">Current Balance</div>
      <div className="BalanceCard__balance">$76000</div>
      <div className="BalanceCard__info">
        <div className="BalanceCard__number">1234 5678 9012 3456</div>
        <div className="BalanceCard__date">12/23</div>
      </div>
      <Button
        className="BalanceCard__btn"
        onClick={onClick}
      >Add money</Button>
    </div>
  )
}