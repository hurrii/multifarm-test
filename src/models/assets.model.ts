export interface Asset {
  assetId: string;
  selected_farm: SelectedFarm[]
}

interface SelectedFarm {
  tvlStakedHistory: ChartDataItem[]
}

export interface ChartDataItem {
  date: string | number;
  value: number;
}
