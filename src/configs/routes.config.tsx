import { Navigate, type RouteObject } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ResultPage } from "../pages/ResultPage";

export const ROUTES_CONFIG: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: 'results',
        element: <ResultPage />
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]