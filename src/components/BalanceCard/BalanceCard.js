import './BalanceCard.scss'




export const BalanceCard = () => {
    return (
        <div className="BalanceCard">
         <div className="BalanceCard__label">Current Balance</div> 
         <div className="BalanceCard__balance">$76000</div>  
         <div className="BalanceCard__number">1234 5678 9012 3456</div>
         <div className="BalanceCard__date">12/24</div>
        </div>
    )
}