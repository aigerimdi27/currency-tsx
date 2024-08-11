import { type FC } from 'react'
import style from './Info.module.scss'
import downArrow from '@/assets/images/downarrowicon.svg'
import equalIcon from '@/assets/images/equalicon.svg'
import upArrow from '@/assets/images/uparrowicon.svg'

export interface InfoProps {}

export const Info: FC<InfoProps> = () => {
    return (
       <>
            <div className={style.info}>
                <div className={style.results}>

                    <div className={style.result} id='resultFrom'>
                        <div className={style.result__icon}>
                            <img src={downArrow} alt="" />
                        </div>

                        <div className={style.result__titles}>
                            <div className={style.result__title}>USD</div>
                            <div className={style.result__desc}>American dollar</div>
                        </div>

                        <div className={style.result__value}>1.00</div>
                    </div>

                    <div className={style.result__equals}>
                        <img src={equalIcon} alt="" />
                    </div>

                    <div className={style.result} id='resultTo'>
                        <div className={style.result__icon}>
                            <img src={upArrow} alt="" />
                        </div>

                        <div className={style.result__titles}>
                            <div className={style.result__title}>EUR</div>
                            <div className={style.result__desc}>Euro</div>
                        </div>

                        <div className={style.result__value}>2.00</div>
                    </div>

                </div>

                <button type="button" className={style.btn}>Convert</button>
            </div>
            <div className={style.rate__info}>
                <div className={style.rate__conversion}>$1 = $35</div>
                <div className={style.rate__last}>Updated 18 June 2024</div>
            </div>
        </>
    )
}
