import Contacto from "../components/common/Contacto";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import consultoriaITLottie from "../assets/lottie/animacion3.json";
import softwareLottie from "../assets/lottie/animacion2.json";
import webLottie from "../assets/lottie/animacion1.json";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Servicios() {
    const consultoriaIt = useRef(null);
    const desarrolloDeSoftware = useRef(null);
    const desarrolloWeb = useRef(null);
    const location = useLocation();
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        const hash = location.hash;
        if (hash === "#consultoriaIt" && consultoriaIt.current) {
            handleScroll(consultoriaIt);
        } else if (
            hash === "#desarrolloDeSoftware" &&
            desarrolloDeSoftware.current
        ) {
            handleScroll(desarrolloDeSoftware);
        } else if (hash === "#desarrolloWeb" && desarrolloWeb.current) {
            handleScroll(desarrolloWeb);
        }
    }, [location]);
    return (
        <>
            <Helmet>
                <title>Servicios - ssit group</title>
                <link
                    rel="canonical"
                    href="https://ssit-group.vercel.app/servicios"
                />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-[50vh] md:h-[50vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 cursor-default text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-medium text-center flex flex-col">
                        <span className="text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            Nuestros Servicios
                        </span>
                    </h1>
                </div>
            </section>
            <section className="p-2 md:p-4 sm:pb-24 md:pb-36 flex flex-col gap-20 items-center justify-center">
                <div className="pt-20" ref={consultoriaIt} id="consultoriaIt">
                    <div className="border-2 border-[#6038C6]/50 rounded-2xl bg-white flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
                        <div className="md:w-2/5">
                            <Lottie
                                animationData={consultoriaITLottie}
                                className="w-52 mx-auto max-w-[280px] md:max-w-80"
                            />
                        </div>
                        <div className="md:w-3/5 flex flex-col gap-8 items-start md:px-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                                Consultoria IT
                            </h2>
                            <p className="text-sm sm:text-base text-slate-700">
                                Como consultora integradora de tecnologías
                                informáticas, nuestro objetivo es lograr y
                                mantener una posición de liderazgo en el mercado
                                de TI, proporcionando soluciones que alineen a
                                cada organización con sus objetivos
                                estratégicos.
                            </p>
                            <Link
                                to="/contacto"
                                className="transition hover:translate-x-1"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white h-10 px-4 py-2 sm:text-base">
                                    contactanos{" "}
                                    <span className="ml-1">
                                        <HiArrowNarrowRight className="text-lg" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-20"
                    ref={desarrolloDeSoftware}
                    id="desarrolloDeSoftware"
                >
                    <div className="border-2 border-[#6038C6]/50 rounded-2xl bg-white flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
                        <div className="md:w-2/5">
                            <Lottie
                                animationData={softwareLottie}
                                className="max-w-[280px] md:max-w-80"
                            />
                        </div>
                        <div className="md:w-3/5 flex flex-col gap-8 items-start md:px-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                                Desarrollo de Software
                            </h2>
                            <p className="text-sm sm:text-base text-slate-700">
                                Nos especializamos en proyectos de desarrollo de
                                software de alta calidad, tanto in situ como
                                remotos. Creamos soluciones en diversas
                                plataformas, empleando herramientas de
                                vanguardia, metodologías ágiles y estándares de
                                última generación que garantizan un desarrollo
                                exitoso.
                            </p>
                            <Link
                                to="/contacto"
                                className="transition hover:translate-x-1"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white h-10 px-4 py-2 sm:text-base">
                                    contactanos{" "}
                                    <span className="ml-1">
                                        <HiArrowNarrowRight className="text-lg" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-20" ref={desarrolloWeb} id="desarrolloWeb">
                    <div className="border-2 border-[#6038C6]/50 rounded-2xl bg-white flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
                        <div className="md:w-2/5">
                            <Lottie
                                animationData={webLottie}
                                className="max-w-[280px] md:max-w-80"
                            />
                        </div>
                        <div className="md:w-3/5 flex flex-col gap-8 items-start md:px-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                                Diseño y desarrollo <br /> digital integral
                            </h2>
                            <p className="text-sm sm:text-base text-slate-700">
                                Ofrecemos soluciones creativas y eficientes,
                                personalizando cada proyecto para satisfacer las
                                necesidades de empresas institucionales y
                                particulares. En alianza con{" "}
                                <a
                                    href="http://"
                                    className="underline text-purple-700 transition-colors hover:text-purple-500"
                                >
                                    Koi Digital Studio
                                </a>
                                , escuchamos tus necesidades y te acompañamos en
                                el crecimiento de tu empresa, abordando cada
                                nuevo desafío con responsabilidad para lograr
                                los mejores resultados. Estamos aquí para
                                ayudarte a mejorar tu imagen y alcanzar tus
                                objetivos.
                            </p>
                            <Link
                                to="/contacto"
                                className="transition hover:translate-x-1"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white h-10 px-4 py-2 sm:text-base">
                                    contactanos{" "}
                                    <span className="ml-1">
                                        <HiArrowNarrowRight className="text-lg" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Contacto />
        </>
    );
}

export default Servicios;
