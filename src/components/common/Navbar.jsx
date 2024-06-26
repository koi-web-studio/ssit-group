import { NavLink } from "react-router-dom";
import AOS from "aos";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Navbar() {
    return (
        <header className="header">
            <nav
                data-aos="fade-down"
                className="nav max-w-2xl py-4 sm:px-6 flex items-center justify-around"
            >
                <ul className="flex items-center justify-center px-0 my-0 gap-4 sm:gap-8 md:gap-12 text-slate-500">
                    <li className="nav-item sm:text-xl">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-700 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item sm:text-xl">
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-700 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Servicios
                        </NavLink>
                    </li>
                    <li className="nav-item sm:text-xl">
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-700 p-2 rounded-3xl text-white"
                                    : "hover:text-slate-800"
                            }
                        >
                            Proyectos
                        </NavLink>
                    </li>
                    <li className="nav-item sm:text-xl">
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? "font-medium bg-slate-700 p-2 rounded-3xl text-white"
                                    : "transition-colors hover:text-slate-800"
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
