import Contacto from "../components/common/Contacto";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { TbExternalLink } from "react-icons/tb";
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
            <section className="py-8 px-4">
                <div>
                    <div className="flex flex-col items-stretch gap-8 md:flex-row md:justify-center max-w-5xl mx-auto">
                        <a
                            href="https://www.myassistanceapp.com"
                            className="md:w-1/3"
                        >
                            <div
                                data-aos="fade-left"
                                className="bg-[#ffffff7a] border grid-card flex space-x-4 items-center md:items-start mx-auto px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="mx-auto flex items-stretch md:items-start gap-8">
                                    <div className="icons-container rounded-lg p-2 bg-pink-500 shadow-sm">
                                        <img
                                            src="/ma.webp"
                                            alt="logo My Assistence"
                                            width={15}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            My Assistance{" "}
                                            <span className="ml-2">
                                                <TbExternalLink />
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/foreventapp"
                            className="md:w-1/3"
                        >
                            <div
                                data-aos="fade-up"
                                data-delay="200"
                                className="bg-[#ffffff7a] border grid-card flex items-stretch md:items-start mx-auto px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="mx-auto flex items-stretch md:items-start gap-8">
                                    <div className="icons-container">
                                        <img
                                            src="/forevent.webp"
                                            alt="logo Forevent"
                                            width={30}
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
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="md:w-1/3">
                            <div
                                data-aos="fade-right"
                                data-delay="300"
                                className="bg-[#ffffff7a] border grid-card flex space-x-4 items-center md:items-start mx-auto px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="mx-auto flex items-stretch md:items-start gap-8">
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
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section
                className="mt-16 p-2 md:p-4 flex flex-col gap-20 items-center justify-center"
                id="consultoriaIt"
            >
                <div className="max-w-[400px] rounded-2xl bg-white flex flex-col md:flex-row items-center gap-4 md:gap-8 md:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <div className="md:w-2/5 bg-pink-100/50 p-2 rounded-t-2xl md:rounded-bl-2xl">
                        <img src="/Mokcup.png" alt="logo My Assistence" />
                    </div>
                    <div className="md:w-3/5 flex flex-col gap-4 md:gap-8 items-start p-4 md:py-6 md:px-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-blanco">
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
                <div className="max-w-[400px] rounded-2xl bg-white flex flex-col md:flex-row items-center gap-4 md:gap-8 md:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <div className="md:w-2/5 bg-pink-100 p-2 rounded-t-2xl md:rounded-bl-2xl">
                        <img src="/Mokcup.png" alt="logo My Assistence" />
                    </div>
                    <div className="md:w-3/5 flex flex-col gap-4 md:gap-8 items-start p-4 md:py-6 md:px-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-blanco">
                            Forevent
                        </h2>
                        <p className="text-sm sm:text-base text-slate-700">
                            My Assistance es una herramienta tecnológica que
                            permite simplificar los procesos de Asistencia,
                            Presentismo y Control de Personal.
                        </p>
                        <ContactanosCTA />
                    </div>
                </div>
                <div className="max-w-[400px] rounded-2xl bg-white flex flex-col md:flex-row items-center gap-4 md:gap-8 md:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <div className="md:w-2/5 bg-pink-100 p-2 rounded-t-2xl md:rounded-bl-2xl">
                        <img src="/Mokcup.png" alt="logo My Assistence" />
                    </div>
                    <div className="md:w-3/5 flex flex-col gap-4 md:gap-8 items-start p-4 md:py-6 md:px-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-blanco">
                            ERP Laya Gestión
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
            <Contacto />
        </>
    );
}

export default Proyectos;
