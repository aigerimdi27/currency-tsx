import { type FC } from 'react'
import style from './Convert.module.scss'
import { Inputs } from '@/components/Inputs/Inputs'
import { Info } from '@/components/Info'

export interface IConvertProps {}

const Convert: FC<IConvertProps> = () => {
    return (
        <div className={style.content}>
            <Inputs />
            <Info />
        </div>
    )
}

export default Convert