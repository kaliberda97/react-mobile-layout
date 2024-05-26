import { Button } from '../Button/Button'
import './BalanceCard.scss'

export const BalanceCard = () => {
  const onClick = () => {
    alert('Add money')
  }

  return (
    <div className="BalanceCard">
      <div className="BalanceCard__label">Current Balance</div>
      <div className="BalanceCard__balance">€1500</div>
      <div className="BalanceCard__info">
        <div className="BalanceCard__number">1234 5678 9098 7654</div>
        <div className="BalanceCard__date">12/24</div>
      </div>
      <Button
        className="BalanceCard__btn"
        onClick={onClick}
      >ADD MONEY</Button>
    </div>
  )
}

// added design