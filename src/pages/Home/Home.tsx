import { type FC } from 'react'
import style from './Home.module.scss'
import { Header } from '@/components/Header'
import { AppRouter } from '@/app/router'

export interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <h1 className={style.title}>Check live foreign currency exchange rates</h1>
                <div className={style.content}>
                    
                    <Header />
                    <AppRouter />

                </div>
            </div>
        </div>
    )
}
