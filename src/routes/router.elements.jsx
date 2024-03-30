import { Navigate } from 'react-router-dom'
import { Home } from '../views/Home'

export const routeo = [
    {
        path: "/",
        element: <Navigate to={"/inicio"}/>
    },
    {
        path: "/inicio",
        element: <Home/>
    },
    {
        path: "/productos",
        element: "sección de productos"
    },
    {
        path: "/promociones",
        element: "sección de promociones"
    },
    {
        path: "/nosotros",
        element: "sección de nosotros"
    },
    {
        path: "*",
        element: "nothing"
    }
]