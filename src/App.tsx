import './App.scss'

import useChartData from './hooks/useChartData'

function App() {
  const chartData = useChartData();
  const items = chartData?.map(i => <li key={ i.date }>{ i.date } - { i.value }</li>)

  return (
    <div className="page">
      <ul>
        { items }
      </ul>
    </div>
  )
}

export default App
