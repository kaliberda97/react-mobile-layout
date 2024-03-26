import './App.scss'
import { Actions } from './components/Actions/Actions';
import { BalanceCard } from './components/BalanceCard/BalanceCard';

function App() {
  return (
    <div className="App">
       <BalanceCard />
       <Actions/>
       <Statistic/>
    </div>
  );
}

export default App;
