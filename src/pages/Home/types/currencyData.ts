interface IConversionRates {
    [currency: string]: number
}

export interface ICurrency {
    base_code: string;
    conversion_rates: IConversionRates;
    time_last_update_utc: string;
}

export interface ICodes {
    supported_codes: [string, string][]
}