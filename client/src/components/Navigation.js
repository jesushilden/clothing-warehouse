import { Link, useLocation } from "react-router-dom"
import './Navigation.css'

const Navigation = ({ routes }) => {
    const location = useLocation()

    const getClassName = (route) => route === location.pathname.substring(1) ? 'Link active' : 'Link'

    return (
        <div className='Navigation' >
            {routes.map(route => <Link to={route} className={getClassName(route)}>{route}</Link>)}
        </div>
    )
}

export default Navigation