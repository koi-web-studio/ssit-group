import ContactBtn from "../components/ui/ContactBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import consultoriaITLottie from "../assets/lottie/animacion3.json";
import softwareLottie from "../assets/lottie/animacion2.json";
import webLottie from "../assets/lottie/animacion1.json";
import { FaLaptopCode } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
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
            <section className="h-[75vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium text-center flex flex-col">
                        <span className="text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            Nuestros Servicios
                        </span>
                    </h1>
                </div>
            </section>
            <section className="pb-32 px-2">
                <div>
                    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8">
                        <div
                            onClick={() => handleScroll(consultoriaIt)}
                            data-aos="fade-left"
                            className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                        >
                            <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                <TbUserCode className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                    Consultoria It{" "}
                                    {/* <span className="ml-2">
                                        <TbExternalLink />
                                    </span> */}
                                </h3>
                                <p className="text-md text-gris">
                                    Servicios en tiempo real para optimizar
                                    recursos tecnológicos, logrando liderazgo en
                                    el mercado de TI con soluciones alineadas a
                                    los objetivos organizacionales.
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => handleScroll(desarrolloDeSoftware)}
                            data-aos="fade-up"
                            data-delay="200"
                            className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                        >
                            <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                <FaLaptopCode className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                    Desarrollo de Software
                                    {/* <span className="ml-2">
                                        <TbExternalLink />
                                    </span> */}
                                </h3>
                                <p className="text-md text-gris">
                                    Proyectos de alta calidad, in situ y
                                    remotos, utilizando herramientas de
                                    vanguardia, metodologías ágiles y estándares
                                    de última generación para un desarrollo
                                    exitoso.
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => handleScroll(desarrolloWeb)}
                            data-aos="fade-right"
                            data-delay="300"
                            className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                        >
                            <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                <CiGlobe className="text-xl" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                    Diseño y desarrollo <br /> digital integral
                                    {/* <span className="ml-2">
                                        <TbExternalLink />
                                    </span> */}
                                </h3>
                                <p className="text-md text-gris">
                                    Soluciones personalizadas para empresas,
                                    mejorando tu imagen y alcanzando tus
                                    objetivos con creatividad, eficiencia y
                                    responsabilidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center px-2 md:px-4"
                ref={consultoriaIt}
                id="consultoriaIt"
            >
                {/* <div className="flex flex-col md:flex-row items-center max-w-5xl h-[400px] gap-8 mask p-4 md:p-6 rounded-md"> */}
                <div className="rounded-t-2xl mask flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
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
                            Ofrecer servicios en tiempo real para optimizar los
                            recursos tecnológicos implementados. Como consultora
                            integradora de tecnologías informáticas, nuestro
                            objetivo es lograr y mantener una posición de
                            liderazgo en el mercado de TI, proporcionando
                            soluciones que alineen a cada organización con sus
                            objetivos estratégicos.
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
            </section>
            <section
                className="h-screen grid place-items-center px-2 md:px-4"
                ref={desarrolloDeSoftware}
                id="desarrolloDeSoftware"
            >
                {/* <div className="flex flex-col md:flex-row items-center max-w-5xl h-[400px] gap-8 mask p-4 md:p-6 rounded-md"> */}
                <div className="rounded-t-2xl mask flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
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
                            remotos. Creamos soluciones en diversas plataformas,
                            empleando herramientas de vanguardia, metodologías
                            ágiles y estándares de última generación que
                            garantizan un desarrollo exitoso.
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
            </section>
            <section
                className="h-screen grid place-items-center px-2 md:px-4"
                ref={desarrolloWeb}
                id="desarrolloWeb"
            >
                {/* <div className="flex flex-col md:flex-row items-center max-w-5xl h-[400px] gap-8 mask p-4 md:p-6 rounded-md"> */}
                <div className="rounded-t-2xl mask flex flex-col md:flex-row items-center gap-8 p-4 md:p-6 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
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
                            particulares. Escuchamos tus necesidades y te
                            acompañamos en el crecimiento de tu empresa,
                            abordando cada nuevo desafío con responsabilidad
                            para lograr los mejores resultados. Estamos aquí
                            para ayudarte a mejorar tu imagen y alcanzar tus
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
            </section>
            <section className="px-2 sm:px-4 py-12 md:py-36">
                <div className="relative left-0 top-0 h-full w-full grid place-content-center py-36 lg:max-w-5xl lg:mx-auto">
                    <div className="absolute bg-slate-950 h-full w-full -z-10 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    </div>
                    <div className="absolute h-full w-full z-20 grid place-items-center">
                        <div className="flex flex-col gap-12 items-center">
                            <h3 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">
                                Si tenes alguna duda
                            </h3>
                            <ContactBtn />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Servicios;
