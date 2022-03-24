import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts"

import classes from './AssetAreaChart.module.scss';
import { ChartDataItem } from "../models/assets.model"

interface Props {
  chartData: ChartDataItem[],
  valueFormatter: (value: number) => string,
  title: string
}

function AssetAreaChart({ chartData, valueFormatter, title }: Props) {
  return <div className={ classes.wrapper }>
    <p className={ classes.title }>{ title }</p>

    <div className={ classes.chartWrapper }>
      <ResponsiveContainer width="99%" aspect={ 3 }>
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
          tickFormatter={ (value) => valueFormatter(value) }/>

        <CartesianGrid
          stroke="#6B6BB2"
          opacity={ 0.4 }
          strokeWidth={ 0.5 }/>

        <Area type="monotone" dataKey="value" stroke="#D750FF" strokeWidth="2" fillOpacity={ 1 } fill="url(#colorUv)"/>
      </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
}

function formatDate(date: number): string {
  return new Intl.DateTimeFormat('en', { day: '2-digit' , month: 'short' }).format(date)
}

export default AssetAreaChart