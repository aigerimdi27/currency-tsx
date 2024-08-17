import { type FC } from 'react'
import style from './Inputs.module.scss'
import mediaStyle from './_media.module.scss'
import switchIcon from '@/assets/images/switchicon.svg'
import classNames from 'classnames'
import '@/assets/styles/_global.scss'
import { useGetCodesQuery} from '@/api/exchange/exchange.api'

export interface InputsProps {
    amount: string;
    fromCurrency: string;
    toCurrency: string;
    onAmountChange: (amount: string) => void;
    onFromCurrencyChange: (currency: string) => void;
    onToCurrencyChange: (currency: string) => void;
}


export const Inputs: FC<InputsProps> = ({
    amount,
    fromCurrency,
    toCurrency,
    onAmountChange,
    onFromCurrencyChange,
    onToCurrencyChange
}) => {

    const { data: codesData } = useGetCodesQuery();

    const currencyOptions = codesData?.supported_codes.map(([code, name]) => (
        <option key={code} value={code}>
            {name} ({code})
        </option>
    ))

    const handleSwitchCurrencies = () => {
        onFromCurrencyChange(toCurrency)
        onToCurrencyChange(fromCurrency)
    }

    return (
       <div className={classNames(style.inputs, mediaStyle.inputs)}>
           

            <div className={classNames(style.amount, mediaStyle.amount)}>
                <label htmlFor='amount'>Amount</label>
                <input 
                    type='number' 
                    id='amount'
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    required
                />
            </div>
            

            <div className={classNames(style.selects, mediaStyle.selects)}>

                <div>
                    <label htmlFor="from">From</label>
                    <select 
                        id="from"
                        value={fromCurrency}
                        onChange={(e) => onFromCurrencyChange(e.target.value)}
                        className={classNames(style.select, mediaStyle.select)}
                        required
                        >
                        <option value="" disabled>
                            Choose currency 
                        </option>
                        {currencyOptions}
                    </select>
                </div>

                <div className={classNames(style.select__icon, mediaStyle.select__icon)}>
                    <img 
                        src={switchIcon} 
                        alt="switch" 
                        onClick={handleSwitchCurrencies}
                    />
                </div>

                <div >
                    <label htmlFor="to">To</label>
                    <select 
                        id="to"
                        value={toCurrency}
                        onChange={(e) => onToCurrencyChange(e.target.value)}
                        className={classNames(style.select, mediaStyle.select)}
                        required
                        >
                        <option value="" disabled>
                            Choose currency 
                        </option>
                        {currencyOptions}

                    </select>
                </div>

            </div>

       </div>
    )
}
