import { useEffect, useMemo, useState, type FC } from 'react'
import style from './Info.module.scss'
import mediaStyle from './_media.module.scss'
import downArrow from '@/assets/images/downarrowicon.svg'
import equalIcon from '@/assets/images/equalicon.svg'
import upArrow from '@/assets/images/uparrowicon.svg'
import classNames from 'classnames'
import '@/assets/styles/_global.scss'
import { useGetCodesQuery, useGetCurrencyQuery } from '@/api/exchange/exchange.api'


export interface InfoProps {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
}

export const Info: FC<InfoProps> = ({ amount, fromCurrency, toCurrency}) => {

    const [showInfo, setShowInfo] = useState<boolean>(false)
    
    const { data: currencyData } = useGetCurrencyQuery()
    const { data: codesData } = useGetCodesQuery()

    const currencyNames = useMemo(() => {
        return codesData?.supported_codes.reduce((acc: Record<string, string>, [code, name]) => {
            acc[code] = name
            return acc
        }, {})
    }, [codesData])
  

    const conversionRate = currencyData ? (currencyData.conversion_rates[toCurrency] / currencyData.conversion_rates[fromCurrency]) : 0
    const convertedAmount = useMemo(() => amount * conversionRate, [amount, conversionRate])

    const fromCurrencyName = currencyNames?.[fromCurrency] 
    const toCurrencyName = currencyNames?.[toCurrency] 
   

    useEffect(() => {
        if (showInfo) {
            setShowInfo(false)
        }
    }, [amount, fromCurrency, toCurrency, currencyData, codesData])

    return (
       <>
            <div className={classNames(style.info, mediaStyle.info)}>
                { showInfo && (
                    <div className={classNames(style.results, mediaStyle.results)}>

                        <div className={classNames(style.result, mediaStyle.result)} id='resultFrom'>
                            <div className={classNames(style.result__icon, mediaStyle.result__icon)}>
                                <img src={downArrow} alt="" />
                            </div>

                            <div className={style.result__titles}>
                                <div className={classNames(style.result__title, mediaStyle.result__title)}>{fromCurrencyName}</div>
                                <div className={classNames(style.result__desc, mediaStyle.result__desc)}>{fromCurrency}</div>
                            </div>

                            <div className={classNames(style.result__value, mediaStyle.result__value)}>{amount.toFixed(2)}</div>
                        </div>

                        <div className={style.result__equals}>
                            <img src={equalIcon} alt="" />
                        </div>

                        <div className={classNames(style.result, mediaStyle.result)} id='resultTo'>
                            <div className={classNames(style.result__icon, mediaStyle.result__icon)}>
                                <img src={upArrow} alt="" />
                            </div>

                            <div className={style.result__titles}>
                                <div className={classNames(style.result__title, mediaStyle.result__title)}>{toCurrencyName}</div>
                                <div className={classNames(style.result__desc, mediaStyle.result__desc)}>{toCurrency}</div>
                            </div>

                            <div className={classNames(style.result__value, mediaStyle.result__value)}>{convertedAmount.toFixed(2)}</div>
                        </div>

                    </div>
                )}

                <button 
                    type="button" 
                    className={classNames(mediaStyle.btn, ["btn"])}
                    onClick={() => setShowInfo(!showInfo)}
                >
                    Convert
                </button>

            </div>
                <div className={classNames(style.rate__info, mediaStyle.rate__info)}>
                    <div className={classNames(style.rate__conversion, mediaStyle.rate__conversion)}>
                            
                        {currencyData ? `1 ${fromCurrencyName} = ${conversionRate.toFixed(2)} ${toCurrencyName}` : ''}
                    </div>
                    <div className={classNames(style.rate__last, mediaStyle.rate__last)}>
                        Updated {currencyData?.time_last_update_utc 
                            ?  new Date(currencyData.time_last_update_utc).toLocaleDateString()
                            : "undefined"}
                    </div>
                </div>
        </>
    )
}
