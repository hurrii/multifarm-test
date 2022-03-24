import { useEffect, useState } from "react";
import { Asset, TvlHistoryItem } from "../models/assets.model";

interface ApiResp {
  data: Asset[],
  max_pages: number
}

const apiPath = 'https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000'

function useChartData(): TvlHistoryItem[] {
  const [data, setData] = useState<Asset[]>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(apiPath)
        const result = await resp.json() as ApiResp

        setData(result?.data)
      } catch (error) {
        setData(null)

        console.warn(error);
        throw error;
      }
    }

    fetchData()
  }, [])

  const asset = data?.find(asset => asset.assetId === 'TERRA_Lido__LUNA');

  if (!asset) { return null }

  const selectedFarm = asset?.selected_farm[0];

  if (!selectedFarm) { return null; }

  return selectedFarm?.tvlStakedHistory || null
}

export default useChartData;