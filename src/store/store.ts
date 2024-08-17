import { configureStore } from "@reduxjs/toolkit";
import currencyApi from "@/api/exchange/exchange.api";

export const store = configureStore({
    reducer: {
        [currencyApi.reducerPath]: currencyApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(currencyApi.middleware),
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch