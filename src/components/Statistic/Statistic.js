import './Statistic.scss'


export const Statistic = () => {
    <div className="Statistic">
      <div className="Statistic__label">BALANCE</div>
      <div className="Statistic__2col">
        <div className="Statistic__balance">€123,45</div>
        <IconButton icon="share" onClick={onShare} />
      </div>
      <div className="Statistic__label">SPENT</div>
      <div className="Statistic__2col">
        <CircleStatistic
          label="last month"
          percent={percentLeft}
          disabled
        >$208,00</CircleStatistic>
        <CircleStatistic
          label="this month"
          percent={percentRight}
        >$328,00</CircleStatistic>
      </div>

    </div>
}