import './App.scss'
import AssetAreaChart from './components/AssetAreaChart';
import { aprMockData } from './data/apr-mock.data';
import useChartData from './hooks/useChartData'


function App() {
  const chartData = useChartData();

  return (
    <div className="page">
      <div className="row charts-wrapper">
        <div className="col-6">
         <AssetAreaChart
          chartData={ aprMockData }
          valueFormatter={ formatAprTickValue }
          title='Asset APR (y)'
          />
        </div>

        <div className="col-6">
          {
            chartData
            &&
            <AssetAreaChart
              title='Asset TVL'
              chartData={ chartData }
              valueFormatter={ formatTVLTickValue }/>
          }
        </div>
      </div>
    </div>
  )
}

function formatTVLTickValue(value: number): string {
  return new Intl.NumberFormat('en', { notation: "compact", compactDisplay: "short" }).format(value)
}

function formatAprTickValue(value: number): string {
  return `${value}%`
}



export default App
