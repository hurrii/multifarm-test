import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';

import './App.scss'
import useChartData from './hooks/useChartData'


function App() {
  const chartData = useChartData();

  return (
    <div className="page">
      <div className="row charts-wrapper">
        <div className="col-6">

        </div>

        <div className="col-6">
          <p>Asset TVL</p>

          { chartData && <ResponsiveContainer width="99%" aspect={ 3 }>
              <AreaChart data={ chartData }>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D750FF" stopOpacity={ 0 }/>
                  <stop offset="100%" stopColor="#3f5e8d" stopOpacity={ .8 }/>
                </linearGradient>
              </defs>

              <XAxis
                dataKey="date"
                interval="preserveStart"
                tick={ { dy: 10, fontSize: 10, fill: '#B2BDFF' } }
                tickFormatter={ (value) => formatDate(value) }/>

              <YAxis tick={ { dx: -10, fontSize: 10, fill: '#B2BDFF' } }
                tickFormatter={ (value) => formatTickValue(value) }/>

              <CartesianGrid
                stroke="#6B6BB2"
                opacity={ 0.4 }
                strokeWidth={ 0.5 }/>

              <Area type="monotone" dataKey="value" stroke="#D750FF" strokeWidth="2" fillOpacity={ 1 } fill="url(#colorUv)"/>
            </AreaChart>
          </ResponsiveContainer>
          }

        </div>
      </div>
    </div>
  )
}

function formatTickValue(value: number): string {
  return new Intl.NumberFormat('en', { notation: "compact", compactDisplay: "short" }).format(value)
}

function formatDate(date: number): string {
  return new Intl.DateTimeFormat('en', { day: '2-digit' , month: 'short' }).format(date)
}

export default App
