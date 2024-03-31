import { Navigate } from 'react-router-dom'
import { Productos } from '../views/Productos/Productos'
import { Promociones } from '../views/Promociones/Promociones'
import { Nosotros } from '../views/Nosotros/Nosotros'
import { Inicio } from '../views/Inicio/Inicio'

export const routeo = [
    {
        path: "/",
        element: <Navigate to={"/inicio"}/>
    },
    {
        path: "/inicio",
        element: <Inicio/>
    },
    {
        path: "/productos",
        element: <Productos/>
    },
    {
        path: "/promociones",
        element: <Promociones/>
    },
    {
        path: "/nosotros",
        element: <Nosotros/>
    },
    {
        path: "*",
        element: "nothing"
    }
]