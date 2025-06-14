'use client'

import { api } from "@/lib/axios"
import dayjs from "dayjs"
import React, { createContext, useEffect, useState } from "react"

type VerseTypes = {
  id: string
  date: string
  timeOfDay: "morning" | "afternoon" | "evening"
  timeOfDayId?: 1 | 2 | 3
  text: string
  explanation: string
  reference: string
  category: string
  createdAt: string
}

type AppContextTypes = {
  verses: Array<VerseTypes>
  history: Array<VerseTypes>
  actualVerse: VerseTypes
}

export const AppContext = createContext({} as AppContextTypes)

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [verses, setVerses] = useState<Array<VerseTypes>>()
  const [actualVerse, setActualVerses] = useState<VerseTypes>()
  const [history, setHistory] = useState<Array<VerseTypes>>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/verses')
      const historyResponse = await api.get('/verses/history')

      setVerses(response.data)
      setHistory(historyResponse.data)

      const hour = dayjs().locale('pt-br').hour()

      console.log(`[NOTICE] RESPONSE: ${response.data}`)
      console.log(`[NOTICE] HISTORY RESPONSE: ${historyResponse.data}`)
      console.log(`[NOTICE] HOUR: ${hour}`)

      if (hour > 6)
        setActualVerses((response.data as Array<VerseTypes>)?.find(item => item.timeOfDay == 'morning'))
      if (hour > 12)
        setActualVerses((response.data as Array<VerseTypes>)?.find(item => item.timeOfDay == 'afternoon'))
      if (hour == 0)
        setActualVerses((response.data as Array<VerseTypes>)?.find(item => item.timeOfDay == 'evening'))
    }

    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{ verses: verses ?? [], actualVerse: actualVerse!, history: history ?? [] }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider