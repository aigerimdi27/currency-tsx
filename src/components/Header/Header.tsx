import { type FC } from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import convertIcon from '@/assets/images/convertpageicon.svg'
import currencyIcon from '@/assets/images/singlepageicon.svg'
import classNames from 'classnames'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={style.header}>
            <div className={classNames(style.tab, style.active)}>
                <div className={style.icon}>
                    <img src={convertIcon} alt="" />
                </div>
                <NavLink to='/' className={style.link}>Convert</NavLink>
            </div>
            <div className={style.tab}>
                <div className={style.icon}>
                    <img src={currencyIcon} alt="" />
                </div>
                <NavLink to='/currency' className={style.link}>Currency</NavLink>
            </div>
        </div>
    )
}
