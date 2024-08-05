import { Header } from '@/components/Header'
import { type FC } from 'react'

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <>
      <Header/>
    </>
  )
}
