import { Home } from '@/pages/Home'
import { type FC } from 'react'

export interface IAppProps {}

export const App: FC<IAppProps> = () => {
  return (
    <>
      <Home />
    </>
  )
}
