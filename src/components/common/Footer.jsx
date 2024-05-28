import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
    return (
        <footer className="sm:h-[200px] bg-white border-t border-gray-300">
            <div className="h-full flex flex-col justify-center gap-8 lg:max-w-6xl lg:mx-auto px-4 xl:px-0">
                <div className="p-4 sm:py-4 md:px-4 flex flex-col items-center sm:flex-row sm:justify-between gap-4 lg:px-8">
                    <div className="flex flex-col items-center sm:items-start">
                        <Link
                            to="/"
                            className="text-xl font-medium text-blanco transition-colors hover:text-blanco hover:underline hover:underline-offset-2"
                        >
                            SSIT Group
                        </Link>
                        <ul className="hidden sm:flex items-center justify-start gap-5 mt-3">
                            <li className="text-lg transition hover:-translate-y-1">
                                <Link
                                    to="#"
                                    className="text-blanco transition-colors hover:text-blanco"
                                >
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li className="text-lg transition hover:-translate-y-1">
                                <Link
                                    to="#"
                                    className="text-blanco transition-colors hover:text-blanco"
                                >
                                    <MdOutlineMailOutline />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center py-4 gap-4 sm:flex-row sm:items-end sm:mb-0 md:gap-12">
                        <ul className="flex flex-col items-center gap-3">
                            <li className="transition-all hover:-translate-y-1">
                                <Link
                                    to="/servicios"
                                    className="text-blanco text-base md:text-sm transition-colors hover:text-blanco"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li className="transition-all hover:-translate-y-1">
                                <Link
                                    to="/contacto"
                                    className="text-blanco text-base md:text-sm transition-colors hover:text-blanco"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col items-center gap-3">
                            <li className="transition-all hover:-translate-y-1">
                                <Link
                                    to="/proyectos"
                                    className="text-blanco text-base md:text-sm transition-colors hover:text-blanco"
                                >
                                    Proyectos
                                </Link>
                            </li>
                            <li className="transition-all hover:-translate-y-1">
                                <a
                                    href="https://www.myassistanceapp.com"
                                    className="text-blanco text-base md:text-sm transition-colors hover:text-blanco"
                                >
                                    MyAssistance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-3 sm:px-5 pb-2">
                    <div className="text-center">
                        <small className="text-blanco text-[0.85rem] md:text-[0.925rem]">
                            Desarrollado por{" "}
                            <a
                                href="https://www.instagram.com/koiwebstudio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 btn underline transition-colors hover:text-blue-300"
                            >
                                Koi Digital Studio
                            </a>{" "}
                            | © 2024
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
