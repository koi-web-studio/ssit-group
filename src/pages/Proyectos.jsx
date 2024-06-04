import ContactBtn from "../components/ui/ContactBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import ContactanosCTA from "../components/ui/ContactanosCTA";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Proyectos() {
    return (
        <>
            <Helmet>
                <title>Proyectos - ssit group</title>
                <link
                    rel="canonical"
                    href="https://ssit-group.vercel.app/proyectos"
                />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-[50vh] md:h-[75vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium text-center flex flex-col">
                        <span className="text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            Nuestros Proyectos
                        </span>
                    </h1>
                </div>
            </section>
            <section>
                <div>
                    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8">
                        <a href="https://www.myassistanceapp.com">
                            <div
                                data-aos="fade-left"
                                className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container rounded-xl p-2 bg-pink-500 border-2 shadow-sm">
                                    <img
                                        src="/ma.webp"
                                        alt="logo My Assistence"
                                        width={70}
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                        My Assistance{" "}
                                        <span className="ml-2">
                                            <TbExternalLink />
                                        </span>
                                    </h3>
                                    <p className="text-md text-gris">
                                        Servicios en tiempo real para optimizar
                                        recursos tecnológicos, logrando
                                        liderazgo en el mercado de TI con
                                        soluciones alineadas a los objetivos
                                        organizacionales.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/foreventapp">
                            <div
                                data-aos="fade-up"
                                data-delay="200"
                                className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container">
                                    <img
                                        src="/forevent.webp"
                                        alt="logo Forevent"
                                        width={140}
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                        Forevent
                                        <span className="ml-2">
                                            <TbExternalLink />
                                        </span>
                                    </h3>
                                    <p className="text-md text-gris">
                                        Proyectos de alta calidad, in situ y
                                        remotos, utilizando herramientas de
                                        vanguardia, metodologías ágiles y
                                        estándares de última generación para un
                                        desarrollo exitoso.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div
                                data-aos="fade-right"
                                data-delay="300"
                                className="bg-[#ffffff7a] border grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container rounded-lg p-1 border-pink-500 border-2 shadow-sm">
                                    <span className="font-bold text-xs text-gray-500">
                                        ERP
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                        ERP Laya Gestión
                                        <span className="ml-2">
                                            <TbExternalLink />
                                        </span>
                                    </h3>
                                    <p className="text-md text-gris">
                                        Soluciones personalizadas para empresas,
                                        mejorando tu imagen y alcanzando tus
                                        objetivos con creatividad, eficiencia y
                                        responsabilidad.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center px-2 md:px-4"
                /* ref={consultoriaIt} */
                id="consultoriaIt"
            >
                {/* <div className="flex flex-col md:flex-row items-center max-w-5xl h-[400px] gap-8 mask p-4 md:p-6 rounded-md"> */}
                <div className="max-w-[400px] rounded-2xl bg-white flex flex-col md:flex-row items-center gap-4 md:gap-8 md:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <div className="md:w-2/5 bg-pink-500 p-2 rounded-t-2xl md:rounded-bl-2xl">
                        <img src="/ma.webp" alt="logo My Assistence" />
                    </div>
                    <div className="md:w-3/5 flex flex-col gap-4 md:gap-8 items-start p-4 md:py-6 md:px-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            My Assistance
                        </h2>
                        <p className="text-sm sm:text-base text-slate-700">
                            My Assistance es una herramienta tecnológica que
                            permite simplificar los procesos de Asistencia,
                            Presentismo y Control de Personal.
                        </p>
                        <ContactanosCTA />
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

export default Proyectos;
