import { create } from 'zustand'

type PeriodoStore = {
    periodo: 'noturno' | 'matutino'
    setPeriodo: (value: string) => void
}

export const usePeriodo = create<PeriodoStore>() ((set) => ({
    periodo: 'matutino',
    setPeriodo: (value: string) => set({ periodo: value as 'noturno' | 'matutino' })
}))