import { type FC } from 'react'
import style from './Header.module.scss'
import mediaStyle from './_media.module.scss'
import { NavLink } from 'react-router-dom'
import convertIcon from '@/assets/images/convertpageicon.svg'
import currencyIcon from '@/assets/images/singlepageicon.svg'
import classNames from 'classnames'
import '@/assets/styles/_global.scss'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={style.header}>
            <div className={classNames(style.tab, mediaStyle.tab)}>
                <div className={style.icon}>
                    <img src={convertIcon} alt="" />
                </div>
                <NavLink to='/' className={classNames(style.link, mediaStyle.link)}>Convert</NavLink>
            </div>
            <div className={classNames(style.tab, mediaStyle.tab)}>
                <div className={style.icon}>
                    <img src={currencyIcon} alt="" />
                </div>
                <NavLink to='/currency' className={style.link}>Currency</NavLink>
            </div>
        </div>
    )
}
