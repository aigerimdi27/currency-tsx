import { Currency, Convert } from "@/pages"
import { ReactElement, Suspense, type FC } from 'react'
import { Routes, Route } from "react-router-dom"

export enum PagesEnum {
    CONVERT = "/",
    CURRENCY = "/currency",
    // NOT_FOUND = "*"
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
    [PagesEnum.CONVERT] : <Convert/>,
    [PagesEnum.CURRENCY] : <Currency/>
}
export interface IAppRouterProps {}

export const AppRouter: FC<IAppRouterProps> = () => {
    return (
       <Suspense fallback={<>Loading...</>}>
        <Routes>
            {
                Object.entries(AppRouterPages).map(([path, element]) => (
                    <Route path={path} element={element} key={path}/>
                ))
            }
        </Routes>
       </Suspense>
    )
}
