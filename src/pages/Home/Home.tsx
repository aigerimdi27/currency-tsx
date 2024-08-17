import { type FC } from 'react'
import style from './Home.module.scss'
import mediaStyle from './_media.module.scss'
import { Header } from '@/components/Header'
import { AppRouter } from '@/app/router'
import classNames from 'classnames'
import '@/assets/styles/_global.scss'

export interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
    return (
        <section className={classNames(style.home, mediaStyle.home)}>
            <div className={classNames(style.wrapper, mediaStyle.wrapper)}>
                    <h1 className={classNames(style.title, mediaStyle.title)}>Check live foreign currency exchange rates</h1>
                    <div className={classNames(style.content, mediaStyle.content)}>
                        <div className={classNames(style.container, ["container"])}>
                            <Header />
                            <AppRouter />
                        </div>
                    </div>
            </div>
        </section>
    )
}
