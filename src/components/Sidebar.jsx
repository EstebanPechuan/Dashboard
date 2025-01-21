import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const [liActive, setLiActive] = useState('overview')
    const location = useLocation()
    const { logout } = useContext(AuthContext)
    
    useEffect(() => {
        let path = location.pathname.split('/')[1]
        setLiActive(path)                
    }, [location.pathname])

    // useEffect(() => {
    //     window.innerWidth >= 560 ? setOpen(true) : setOpen(false)
    // }, [])

    return (
        <div id="sidebar" className={open ? 'sidebar' : 'sidebar inactive'}>
            <div className="topSidebar">
                <h3 className="sidebarTitle">Finances</h3>

                <button onClick={() => setOpen(prev => !prev)}><Icon icon="line-md:menu" width="24" height="24" /></button>
            </div>

            <nav>
                <li>
                    <Link className={liActive === 'overview' ? 'active' : ''} to={'/overview'}>
                        <Icon icon="material-symbols:home-rounded" width="24" height="24" />
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link className={liActive === 'transactions' ? 'active' : ''} to={'/transactions'}>
                        <Icon icon="tabler:arrows-sort" width="24" height="24" />
                        <span>Transactions</span>
                    </Link>
                </li>
                <li>
                    <Link className={liActive === 'budgets' ? 'active' : ''} to={'#'}>
                        <Icon icon="uim:graph-bar" width="24" height="24" />
                        <span>Budgets</span>
                    </Link>
                </li>
                <li>
                    <Link className={liActive === 'pots' ? 'active' : ''} to={'#'}>
                        <Icon icon="material-symbols:savings-rounded" width="24" height="24" />
                        <span>Pots</span>
                    </Link>
                </li>
                <li>
                    <Link className={liActive === 'bills' ? 'active' : ''} to={'/bills'}>
                        <Icon icon="ph:newspaper-clipping-fill" width="24" height="24" />
                        <span>Recurring Bills</span>
                    </Link>
                </li>

                <li className="logout">
                    <Link to={'/'}>
                        <Icon onClick={() => logout()} icon="ri:logout-box-line" width="24" height="24" />
                        <button onClick={() => logout()}>Logout</button>
                    </Link>
                </li>
            </nav>

            <div className="bottonSidebar">
                {open ? <button onClick={() => setOpen(prev => !prev)}>Minimize Menu</button> : ''}
            </div>
        </div>
    )
}