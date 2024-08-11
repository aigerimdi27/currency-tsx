import { type FC } from 'react'
import style from './Currency.module.scss'
import classNames from 'classnames'

export interface ICurrencyProps {}

const Currency: FC<ICurrencyProps> = () => {
    return (
        <div className={style.currency}>
            <div className={style.content}>
                <div className={style.single}>

                    <select className={style.select} id="singleSelect">
                        <option value="" disabled selected>
                            Choose currency
                        </option>
                    </select>

                    <div className={style.single__item}>
                        <div className={classNames(style.item, style.current)}>

                            <div className={style.titles}>
                                <div className={style.title}>USD</div>
                                <div className={style.desc}>American dollar</div>
                            </div>
                            
                            <div className={style.amount}>1.00</div>
                            <div className={style.action}>
                                <button className={classNames(style.btn, style.change)}>Change</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={style.list}>
                    <div className={style.item}>

                        <div className={style.titles}>
                            <div className={style.title}>EUR</div>
                            <div className={style.desc}>Euro</div>
                        </div>

                        <div className={style.amount}>2.00</div>
                        <div className={style.action}>
                            <button className={classNames(style.btn, style.remove)}>Remove</button>
                        </div>

                    </div>
                </div>

            </div>

            <div className={classNames(style.add, style.active)}>
                <button className={style.add__btn}>Add currency</button>

                <select className={style.select} id="addCurrency">
                    <option value="" disabled selected>
                        Choose currency
                    </option>
                </select>
            </div>

        </div>
    )
}

export default Currency