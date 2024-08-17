import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICodes, ICurrency } from "@/pages/Home/types";



const currencyApi = createApi({
    reducerPath: "currency",
    baseQuery: fetchBaseQuery({ baseUrl: "https://v6.exchangerate-api.com/v6/44e5694216fd5fe0852b4d4c/"}),
    endpoints: (builder) => ({
        getCurrency: builder.query<ICurrency, void>({
            query: () => `latest/KGS`,
        }),
        getCodes: builder.query<ICodes, void>({
            query: () => `codes`
        })
    })
})


export const { useGetCurrencyQuery, useGetCodesQuery } = currencyApi
export default currencyApi