import { type FC } from 'react'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = () => {
    return (
        <div className={style.header}>
            <NavLink to='/'>Convert</NavLink>
            <NavLink to='/currency'>Currency</NavLink>
        </div>
    )
}
