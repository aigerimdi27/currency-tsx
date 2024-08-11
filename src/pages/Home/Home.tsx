import { type FC } from 'react'
import style from './Home.module.scss'
import { Header } from '@/components/Header'
import { AppRouter } from '@/app/router'
import classNames from 'classnames'

export interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
    return (
        <section className={style.home}>
            <div className={style.wrapper}>
                <div className={classNames(style.container, ["container"])}>
                    <h1 className={style.title}>Check live foreign currency exchange rates</h1>
                    <div className={style.content}>
                        
                        <Header />
                        <AppRouter />

                    </div>
                </div>
            </div>
        </section>
    )
}
