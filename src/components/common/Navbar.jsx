import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <header className="header">
            <nav className="nav max-w-xl py-3">
                <ul className="flex items-center justify-center px-0 my-0 gap-4 md:gap-8 mx-auto text-gray-400">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "hover:text-blanco font-medium border-b-[3px] border-spacing-y-0 text-blanco"
                                    : "hover:text-blanco"
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
                                    ? "hover:text-blanco font-medium border-b-[3px] border-spacing-y-0 text-blanco"
                                    : "hover:text-blanco"
                            }
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/productos"
                            className={({ isActive }) =>
                                isActive
                                    ? "hover:text-blanco font-medium border-b-[3px] border-spacing-y-0 text-blanco"
                                    : "hover:text-blanco"
                            }
                        >
                            Productos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? "hover:text-blanco font-medium border-b-[3px] border-spacing-y-0 text-blanco"
                                    : "hover:text-blanco"
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
