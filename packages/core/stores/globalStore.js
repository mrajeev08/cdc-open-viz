import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useGlobalStore = create(devtools((set) => ({
    // Global State
    viewMode: '',
    os: navigator.userAgent.indexOf('Win') !== -1 ? 'Win' : navigator.userAgent.indexOf('Mac') !== -1 ? 'MacOS' : null,
    overlay: {
      object: null,
      show: false,
      disableBgClose: false
    },
    dimensions: null,

    // Actions
    setViewMode: (view) => set(() => ({ viewMode: view })),
    setDimensions: (dimensions) => set(() => ({ dimensions: dimensions })),

    // Overlay Actions
    openOverlay: (obj, disableBgClose = false) => set(() => ({
      overlay: { object: obj, show: true, disableBgClose: disableBgClose }
    })),
    toggleOverlay: (display = false) => set(() => ({
      overlay: { show: display }
    })),
  }),
  {
    enabled: true,
    name: "GlobalStore"
  }
))
