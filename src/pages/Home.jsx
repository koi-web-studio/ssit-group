import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaConnectdevelop } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import MaLogo from "../assets/logos/MaLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { CiGlobe } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import Contacto from "../components/common/Contacto";
import Carrusel from "../components/Carrusel";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Home() {
    return (
        <>
            <Helmet>
                <title>SSIT Group</title>
                <link rel="canonical" href="https://ssit-group.vercel.app" />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-[75vh] px-4 grid place-items-center">
                <div className="flex flex-row-reverse justify-between gap-8 lg:max-w-5xl lg:mx-auto xl:w-[1200px]">
                    <div className="hidden md:flex items-center justify-center">
                        <img
                            src="/hero-img.png"
                            alt="imagen de hero"
                            className="max-w-[395px]"
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-center gap-8">
                        <div className="cursor-pointer btn rounded-full bg-white backdrop-filter-[12px] transition-colors py-5 px-3 h-7 translate-y-[-1rem] animate-fade-in opacity-0 flex items-center gap-4">
                            <img
                                src="/iconoseissigma.ico"
                                alt="logo ssit"
                                className="w-7"
                            />
                            <span className="inline-flex justify-center items-center text-2xl font-semibold leading-5 text-blanco">
                                SSIT
                            </span>
                            <span className="inline-flex justify-center items-center text-2xl font-semibold leading-5 text-blanco">
                                Group
                            </span>
                        </div>
                        <h1 className="text-center md:text-start cursor-default text-4xl md:text-[54px] xl:text-[56px] leading-tight font-medium flex flex-col">
                            <span className="text-blanco translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                                Consultoria informatica
                            </span>{" "}
                            <span className="bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:250ms]">
                                y desarrollo de
                            </span>
                            <span className="bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:250ms]">
                                software
                            </span>
                        </h1>
                        <div className="flex justify-center items-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
                            <Link
                                to="/servicios"
                                className="transition hover:scale-105"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white h-10 px-4 py-2 sm:text-base">
                                    ver servicios{" "}
                                    <span className="ml-1">
                                        <HiArrowNarrowRight className="text-lg" />
                                    </span>
                                </button>
                            </Link>
                            <Link
                                to="/contacto"
                                className="transition hover:scale-105"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-blanco transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border border-blanco h-10 px-4 py-2 sm:text-base">
                                    contactanos
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <Carrusel />
            </section>
            <section className="py-16 px-2 sm:px-4">
                <div className="flex flex-col items-center pb-12 md:pb-32 gap-8 text-blanco">
                    <div className="lg:max-w-6xl lg:mx-auto xl:w-[1200px] flex items-stretch justify-center flex-wrap gap-8 info-container">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="cursor-default info rounded-2xl flex flex-col items-start justify-center px-8 py-4 text-4xl text-white card border border-gray-500/20 basis-[280px] grow min-h-[450px]"
                        >
                            <span>
                                <FaConnectdevelop className="text-slate-700" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-start mt-5 font-medium">
                                Nuestra Misión
                            </h3>
                            <p className="text-start text-base sm:text-lg my-4 text-neutral-400">
                                Ofrecer de manera integral sistemas y procesos
                                tecnológicos que potencien la competitividad,
                                fidelización y crecimiento de las empresas
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="cursor-default info rounded-2xl flex flex-col items-start justify-center px-8 py-4 text-4xl text-white card border border-gray-500/20 basis-[280px] grow min-h-[450px]"
                        >
                            <span>
                                <GiProgression className="text-slate-700" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-start mt-5 font-medium">
                                Nuestra Visión
                            </h3>
                            <p className="text-start text-base sm:text-lg my-4 text-neutral-400">
                                Consolidarnos como una de las empresas más
                                reconocidas de Argentina en gestión empresarial
                                y comercial, ofreciendo soluciones tecnológicas
                                personalizadas para cada cliente.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="cursor-default info rounded-2xl flex flex-col items-start justify-center px-8 py-4 text-4xl text-white card border border-gray-500/20 basis-[280px] grow min-h-[450px]"
                        >
                            <span>
                                <GiStairsGoal className="text-slate-700" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-start mt-5 font-medium">
                                Nuestro Objetivo
                            </h3>
                            <p className="text-start text-base sm:text-lg my-4 text-neutral-400">
                                Toda empresa tiene una meta fija, y Seis Sigma
                                Group no es la excepción. Nuestro objetivo es
                                ofrecer servicios óptimos, productos de calidad
                                y soluciones inmediatas, utilizando herramientas
                                que representan una inversión beneficiosa para
                                su empresa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-2 sm:px-4 md:py-12">
                <div className="rounded-2xl mask grid place-content-center py-36 md:pb-48 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <h3 className="cursor-default mb-24 text-center text-4xl bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text font-medium sm:text-5xl md:text-6xl">
                        Nuestro Desarrollo <br /> de Sistemas
                    </h3>
                    <div className="cursor-default selection:text-white selection:bg-gris flex flex-col items-stretch gap-14">
                        <div className="flex flex-col mx-auto items-start gap-8 md:flex-row md:justify-center md:gap-16 lg:gap-24">
                            <a
                                href="https://www.myassistanceapp.com"
                                className="transition hover:-translate-y-1"
                            >
                                <MaLogo />
                            </a>
                            <a
                                href="#"
                                className="transition hover:-translate-y-1"
                            >
                                <div className="flex items-center py-1 gap-4">
                                    <img
                                        src="/logo_ssit.png"
                                        alt="logo ssit"
                                        width="45"
                                        height="45"
                                    />
                                    <h4 className="font-bold text-[#40495A] text-2xl sm:text-3xl">
                                        SS ERP
                                    </h4>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="transition hover:-translate-y-1"
                            >
                                <div className="flex items-center py-1 gap-4">
                                    <div className="w-[45px] h-[45px] bg-[#0EA5E9] grid place-items-center rounded-lg">
                                        <span className="text-white font-bold text-lg">
                                            TRN
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-[#40495A] text-2xl sm:text-3xl">
                                        Turnero
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4 bg-[#ffffffa6] border-y border-gray-500/40 relative">
                <div className="absolute top-0 left-0 sm:left-8">
                    <div className="flex -mb-px h-[2px] w-72 md:w-80 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                </div>
                <div className="min-h-[500px] grid place-items-center">
                    <div className="py-16">
                        <div className="mb-16">
                            <h2 className="cursor-default text-center bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text text-5xl md:text-6xl lg:text-7xl font-semibold">
                                Servicios
                            </h2>
                        </div>
                        <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            <div
                                data-aos="fade-left"
                                className="grid-card px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <Link
                                    to="/servicios#consultoriaIt"
                                    className="transition hover:scale-105 flex space-x-4 items-center justify-between"
                                >
                                    <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                        <TbUserCode className="text-xl" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            CONSULTORÍA IT
                                        </h3>
                                    </div>
                                    <span className="ml-1">
                                        <HiOutlineExternalLink />
                                    </span>
                                </Link>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-delay="200"
                                className="grid-card px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <Link
                                    to="/servicios#desarrolloDeSoftware"
                                    className="transition hover:scale-105 flex space-x-4 items-center justify-between"
                                >
                                    <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                        <FaLaptopCode className="text-xl" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            DESARROLLO DE <br /> SOFTWARE
                                        </h3>
                                    </div>
                                    <span className="ml-1">
                                        <HiOutlineExternalLink />
                                    </span>
                                </Link>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-delay="300"
                                className="grid-card px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <Link
                                    to="/servicios#desarrolloWeb"
                                    className="transition hover:scale-105 flex space-x-4 items-center justify-between"
                                >
                                    <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                        <CiGlobe className="text-xl" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            DISEÑO Y <br /> DESARROLLO WEB
                                        </h3>
                                    </div>
                                    <span className="ml-1">
                                        <HiOutlineExternalLink />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full pt-8 flex items-center justify-center">
                            <Link
                                to="/servicios"
                                className="transition hover:scale-105"
                            >
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-blanco transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-300 border h-10 px-4 py-2 sm:text-base">
                                    ver servicios
                                    <span className="ml-1">
                                        <HiArrowNarrowRight className="text-lg" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 sm:right-8">
                    <div className="flex -mb-px h-[2px] w-72 md:w-80 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                </div>
            </section>
            <Contacto />
        </>
    );
}

export default Home;
