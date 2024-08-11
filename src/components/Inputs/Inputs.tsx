import { type FC } from 'react'
import style from './Inputs.module.scss'
import switchIcon from '@/assets/images/switchicon.svg'

export interface InputsProps {}

export const Inputs: FC<InputsProps> = () => {
    return (
       <div className={style.inputs}>

            <div className={style.amount}>
                <label htmlFor='amount'>Amount</label>
                <input 
                    type='number' 
                    id='amount'
                    placeholder='1.00'
                    required
                />
            </div>

            <div className={style.selects}>

                <div className={style.select}>
                    <label htmlFor="from">From</label>
                    <select 
                        id="from"
                        required>
                        <option value="" disabled selected>
                            Choose currency 
                        </option>
                    </select>
                </div>

                <div className={style.select__icon}>
                    <img src={switchIcon} alt="" />
                </div>

                <div className={style.select}>
                    <label htmlFor="to">To</label>
                    <select 
                        id="to"
                        required>
                        <option value="" disabled selected>
                            Choose currency 
                        </option>
                    </select>
                </div>

            </div>

       </div>
    )
}
