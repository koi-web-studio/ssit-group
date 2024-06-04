import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaConnectdevelop } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import MaLogo from "../assets/logos/MaLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import ContactBtn from "../components/ui/ContactBtn";
import { CiGlobe } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Home() {
    return (
        <>
            <Helmet>
                <title>Inicio - ssit group</title>
                <link rel="canonical" href="https://ssit-group.vercel.app" />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-[75vh] px-4 grid place-items-center">
                <div className="flex flex-row-reverse gap-8">
                    <div>
                        <img
                            src="/hero-img.png"
                            alt="imagen de hero"
                            className="max-w-md"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-8">
                        <div className="cursor-pointer btn rounded-full bg-white border border-gris backdrop-filter-[12px] transition-colors px-3 h-7 translate-y-[-1rem] animate-fade-in opacity-0">
                            <span className="inline-flex justify-center items-center text-xs leading-5 text-blanco">
                                SSIT
                                <FaCode className="mx-2 text-xl" />
                                Group
                            </span>
                        </div>
                        <h1 className="cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium flex flex-col">
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
            <section className="px-4">
                <div className="flex flex-col items-center pb-12 md:pb-32 gap-8 text-blanco">
                    <div className="lg:max-w-5xl lg:mx-auto xl:w-[1000px] flex items-center justify-center flex-wrap gap-8 info-container">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="cursor-default info rounded-2xl flex flex-col items-start justify-center px-10 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[380px]"
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
                            className="cursor-default info rounded-2xl flex flex-col items-start justify-center px-10 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[380px]"
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
                    </div>
                </div>
            </section>
            <section className="px-4 md:py-12">
                <div className="rounded-t-2xl mask grid place-content-center py-36 md:pb-48 lg:max-w-5xl lg:mx-auto xl:w-[1000px]">
                    <h3 className="cursor-default mb-24 text-center text-4xl bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text font-medium sm:text-5xl md:text-6xl">
                        Nuestro Desarrollo <br /> de Sistemas
                    </h3>
                    <div className="cursor-default selection:text-white selection:bg-gris flex flex-col items-stretch gap-14">
                        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-24">
                            <a
                                href="https://www.myassistanceapp.com"
                                className="transition hover:-translate-y-1"
                            >
                                <MaLogo color="40495A" />
                            </a>
                            <a
                                href="https://www.instagram.com/foreventapp"
                                className="transition hover:-translate-y-1"
                            >
                                <div className="flex items-center py-1 gap-4">
                                    <img
                                        src="/forevent.webp"
                                        alt="logo Forevent"
                                        width={40}
                                        className="rounded-lg"
                                    />
                                    <h4 className="font-bold text-[#40495A] text-2xl">
                                        Forevent
                                    </h4>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="transition hover:-translate-y-1"
                            >
                                <div className="flex items-center py-1 gap-4">
                                    {/* <img
                                    src="/forevent.webp"
                                    alt="logo Forevent"
                                    width={40}
                                    className="rounded-lg grayscale"
                                /> */}
                                    <div className="w-[40px] h-[40px] bg-gris grid place-items-center rounded-lg">
                                        <span className="text-white font-bold">
                                            ERP
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-[#40495A] text-2xl">
                                        ERP Laya Gestión
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div className="hidden flex-col items-center gap-8 md:flex-row md:justify-center md:gap-24">
                            <MaLogo color="40495A" />
                            <MaLogo color="40495A" />
                            <MaLogo color="40495A" />
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
                            <h2 className="cursor-default text-center bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                                Servicios
                            </h2>
                        </div>
                        <div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8">
                            <div
                                data-aos="fade-left"
                                className="grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                    <TbUserCode className="text-xl" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link to="/servicios#consultoriaIt">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            Consultoria IT
                                            <span className="ml-1">
                                                <HiOutlineExternalLink />
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-delay="200"
                                className="grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                    <FaLaptopCode className="text-xl" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link to="/servicios#desarrolloDeSoftware">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            Desarrollo de Software
                                            <span className="ml-1">
                                                <HiOutlineExternalLink />
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                            <div
                                data-aos="fade-right"
                                data-delay="300"
                                className="grid-card flex flex-row space-x-4 items-start px-4 py-8 md:p-4 rounded-2xl cursor-pointer transition-colors ease-in hover:bg-white"
                            >
                                <div className="icons-container rounded-xl p-2 border-pink-500 border-2 shadow-sm">
                                    <CiGlobe className="text-xl" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link to="/servicios#desarrolloWeb">
                                        <h3 className="text-xl font-semibold text-slate-700 inline-flex items-center">
                                            Diseño y Desarrollo web
                                            <span className="ml-1">
                                                <HiOutlineExternalLink />
                                            </span>
                                        </h3>
                                    </Link>
                                </div>
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
            <section className="px-4 py-12 md:py-36">
                <div className="relative left-0 top-0 h-full w-full grid place-content-center py-36 lg:max-w-5xl lg:mx-auto">
                    {/* <div className="absolute bg-secondary h-full w-full -z-10 rounded-2xl">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    </div> */}
                    <div className="absolute h-full w-full z-20">
                        <div className="flex items-center justify-center gap-8">
                            <div>
                                <img
                                    src="/contactanos.png"
                                    alt=""
                                    className="w-[200px]"
                                />
                            </div>
                            <div className="flex flex-col gap-8 items-end">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-blanco text-center">
                                    ¿Tenés alguna duda?
                                </h3>
                                <p className="text-xl">
                                    No dudes en escribirnos
                                </p>
                                <Link
                                    to="/contacto"
                                    className="transition hover:scale-105"
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
                </div>
            </section>
        </>
    );
}

export default Home;
