export interface Asset {
  assetId: string;
  selected_farm: SelectedFarm[]
}

interface SelectedFarm {
  tvlStakedHistory: TvlHistoryItem[]
}

export interface TvlHistoryItem {
  date: string | number;
  value: number;
}
