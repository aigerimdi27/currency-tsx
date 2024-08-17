import { useState, type FC } from 'react'
import style from './Convert.module.scss'
import { Inputs } from '@/components/Inputs/Inputs'
import { Info } from '@/components/Info'

export interface IConvertProps {
}

const Convert: FC<IConvertProps> = () => {
    const [amount, setAmount] = useState<string>('1')
    const [fromCurrency, setFromCurrency] = useState<string>('')
    const [toCurrency, setToCurrency] = useState<string>('')


    return (
        <div className={style.content}>
            <Inputs
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                onAmountChange={setAmount}
                onFromCurrencyChange={setFromCurrency}
                onToCurrencyChange={setToCurrency}
            />
            <Info
                amount={parseFloat(amount) || 0}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
            />
        </div>
    )
}

export default Convert