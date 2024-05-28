import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <header className="header">
            <nav className="nav max-w-sm py-3">
                <ul className="flex items-center justify-center px-0 my-0 gap-4 md:gap-8 mx-auto text-slate-500">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-500/50 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-500/50 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-500/50 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Proyectos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-500/50 p-2 rounded-3xl text-white"
                                    : "bg-slate-500 text-white p-2 rounded-3xl transition-colors hover:bg-slate-500/50"
                            }
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
