import { DataSet } from "./DataSet"
import { SharedFilter } from "./SharedFilter"

export type Config = DataSet & {
    dashboard: {
      sharedFilters: SharedFilter[]
      datasets: Record<string, DataSet>
      description: any
      title: any
      theme: any
      filters: any
    }
    visualizations: {
      [vizKey: string]: {
        visualizationType: string
        dataKey: string
        formattedData: any
        dataDescription: string
        data: any
        originalFormattedData: any
        editing: boolean
        type: 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'filter-dropdowns'
        newViz: boolean
        hide: any[]
        table: {
          showDataTableLink: boolean
        }
        general: any
        title: string
        usesSharedFilter: any
      }
    }
    datasets: Record<string, DataSet>
    dataFileName: string
    table: any
    rows: any[]
    data: any
    filterBehavior: string
  }