import { useState, type FC, type ChangeEvent, useMemo } from 'react'
import style from './Currency.module.scss'
import mediaStyle from './_media.module.scss'
import classNames from 'classnames'
import '@/assets/styles/_global.scss'
import { useGetCodesQuery, useGetCurrencyQuery } from '@/api/exchange/exchange.api'

export interface ICurrencyProps {}

const Currency: FC<ICurrencyProps> = () => {

    
    const { data: currencyData } = useGetCurrencyQuery()
    const { data: codesData } = useGetCodesQuery()

    const [amount, setAmount] = useState<number>(1)
    const [fromCurrency, setFromCurrency] = useState<string>('')
    const [toCurrency, setToCurrency] = useState<string>('')
    
    const [selectedCurrency, setSelectedCurrency] = useState<string>('')
    const [showSelect, setShowSelect] = useState<boolean>(false)
    const [currentCurrency, setCurrentCurrency] = useState<{ code: string, name: string, amount: number }>({
        code: 'USD',
        name: 'American dollar',
        amount: 1
    })
    const [addedCurrencies, setAddedCurrencies] = useState<Array<{ code: string, name: string, amount: number }>>([])


    const conversionRate = currencyData ? (currencyData.conversion_rates[toCurrency] / currencyData.conversion_rates[fromCurrency]) : 0
    const convertedAmount = useMemo(() => amount * conversionRate, [amount, conversionRate])



    const currencyOptions = codesData?.supported_codes.map(([code, name]) => (
        <option key={code} value={code}>
            {name} ({code})
        </option>
    ))

    const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selected = codesData?.supported_codes.find(([code]) => code === e.target.value)
        if (selected) {
            const [code, name] = selected
            setCurrentCurrency({ code, name, amount: 1})
            setShowSelect(false)
        }
    }


    const handleAddCurrency = () => {
        const selected = codesData?.supported_codes.find(([code]) => code === selectedCurrency)
        if (selected) {
            const [code, name] = selected
            setAddedCurrencies(prev => [...prev, { code, name, amount: convertedAmount }])
        }
    }

    const handleRemoveCurrency = (codeToRemove: string) => {
        setAddedCurrencies(addedCurrencies.filter(currency => currency.code !== codeToRemove))
    }

    return (
        <div className={style.currency}>
            <div className={style.content}>
                <div className={style.single}>
                    {showSelect && ( 
                        <select 
                            className={classNames(style.single__select, ["select"])} 
                            id="singleSelect"
                            value={fromCurrency}
                            onChange={handleCurrencyChange}
                            style={{ display: showSelect ? 'block' : 'none' }} 
                        >
                            <option value="" disabled>
                                Choose currency
                            </option>
                            {currencyOptions}
                        </select>
                    )}

                    <div className={style.single__item}>
                        <div className={classNames(style.item, style.current)}>

                            <div className={style.titles}>
                                <div className={style.title}>{currentCurrency.code}</div>
                                <div className={classNames(style.desc)}>{currentCurrency.name}</div>
                            </div>
                            
                            <div className={style.amount}>{currentCurrency.amount}</div>
                            <div className={style.action}>
                                <button 
                                    className={classNames(style.change, ["currency__btn"])}
                                    onClick={() => setShowSelect(!showSelect)}
                                >
                                    Change
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={style.list}>
                    {addedCurrencies.map(currency => (
                        <div key={currency.code} className={style.item}>
                            <div className={style.titles}>
                                <div className={style.title}>{currency.code}</div>
                                <div className={classNames(style.desc)}>{currency.name}</div>
                            </div>

                            <div className={style.amount}>{currency.amount}</div>
                            <div className={style.action}>
                                <button
                                    className={classNames(style.remove, ["currency__btn"])}
                                    onClick={() => handleRemoveCurrency(currency.code)}
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <div className={classNames(style.add, mediaStyle.add)}>

                <select 
                    className={classNames(style.add__currency, ["select"])} 
                    id="addCurrency"
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                    <option value="" disabled>
                        Choose currency
                    </option>
                    {currencyOptions}
                </select>

                <button 
                    className={classNames(style.add__btn, ["btn"])}
                    onClick={() => handleAddCurrency()}
                >
                    Confirm
                </button>

            </div>

        </div>
    )
}

export default Currency