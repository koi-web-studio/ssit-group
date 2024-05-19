import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaConnectdevelop } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { VercelLogo } from "../assets/logos/VercelLogo";
import { CashAppLogo } from "../assets/logos/CashAppLogo";
import { RampLogo } from "../assets/logos/RampLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ContactBtn from "../components/ui/ContactBtn";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <>
            <Helmet>
                <title>Inicio - ssit group</title>
                <link rel="canonical" href="https://ssit-group.vercel.app" />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-[65vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="cursor-pointer btn rounded-full bg-white border border-gris backdrop-filter-[12px] transition-colors px-3 h-7 translate-y-[-1rem] animate-fade-in opacity-0">
                        <span className="inline-flex justify-center items-center text-xs leading-5 text-blanco">
                            SSIT
                            <FaCode className="mx-2 text-xl" />
                            Group
                        </span>
                    </div>
                    <h1 className="cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium text-center flex flex-col">
                        <span className="text-blanco translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
                            Consultoria informatica
                        </span>{" "}
                        <span className="bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:250ms]">
                            y desarrollo de software
                        </span>
                    </h1>
                    <div className="flex justify-center items-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
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
                        <Link
                            to="/servicios"
                            className="transition hover:scale-105"
                        >
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-blanco transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-300 border h-10 px-4 py-2 sm:text-base">
                                ver servicios
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-4">
                <div className="flex flex-col items-center sm:px-2 md:py-32 gap-8 text-blanco">
                    {/* <div className="text-center">
                        <h2 className="text-5xl md:text-6xl mb-5 font-[450] bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text">
                            Que hacemos
                        </h2>
                        <p className="mt-6 text-center text-lg sm:text-xl leading-6 text-gray-500 max-w-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam quaerat harum iure. Quae, officia
                            laudantium?
                        </p>
                    </div> */}
                    <div className="xl:w-[1200px] pb-10 lg:pb-24 flex items-center justify-center flex-wrap gap-8 info-container">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>
                                <FaConnectdevelop className="text-blanco" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Soluciones Altamente Especializadas
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Ofrecemos soluciones personalizadas y
                                especializadas para satisfacer las necesidades
                                únicas de nuestros clientes.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>
                                <MdDevices className="text-blanco" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Inversión en el Éxito
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Consideramos nuestras soluciones como
                                inversiones estratégicas que generan beneficios
                                y ventajas competitivas para nuestros clientes.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="cursor-pointer info rounded-[48px] flex flex-col items-center justify-center px-8 py-2 text-4xl text-white card border border-gray-500/20 basis-[260px] grow h-[350px]"
                        >
                            <span>
                                <GiProgression className="text-blanco" />
                            </span>
                            <h3 className="text-xl md:text-2xl text-slate-600 text-center mt-5 font-medium">
                                Posicionamiento en el Mercado
                            </h3>
                            <p className="text-center text-base sm:text-lg my-4 text-neutral-400">
                                Ayudamos a nuestros clientes a destacarse en su
                                mercado, ofreciendo soluciones que agregan valor
                                y contribuyen al éxito empresarial.
                            </p>
                        </div>
                        {/* <div className="rounded-lg flex flex-col items-center justify-center p-2 py-3 text-4xl text-white  card border-b-4 border-gray-500">
                            <span>
                                <MdDevices />
                            </span>
                            <h3 className="text-xl text-center mt-5 font-semibold">
                                Inversión en el Éxito
                            </h3>
                            <p className="text-center text-lg m-4 text-neutral-400">
                                Consideramos nuestras soluciones como
                                inversiones estratégicas que generan beneficios
                                y ventajas competitivas para nuestros clientes.
                            </p>
                        </div>
                        <div className="rounded-lg flex flex-col items-center justify-center p-2 py-3 text-4xl text-white  bg-neutral-300/10 backdrop-blur-xl border-b-4 border-gray-500">
                            <span>
                                <GiProgression />
                            </span>
                            <h3 className="text-xl text-center mt-5 font-semibold">
                                Posicionamiento en el Mercado
                            </h3>
                            <p className="text-center text-lg m-4 text-neutral-400">
                                Ayudamos a nuestros clientes a destacarse en su
                                mercado, ofreciendo soluciones que agregan valor
                                y contribuyen al éxito empresarial.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="px-8">
                <div className="pb-36">
                    <h3 className="cursor-default mb-24 text-center text-4xl bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text font-medium md:text-5xl">
                        Productos Destacados
                    </h3>
                    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:basis-[calc(50%-20px)] lg:[&_svg]:basis-[calc(16.66%-20px)] lg:max-w-5xl lg:mx-auto">
                        <VercelLogo color="#40495A" />
                        <CashAppLogo color="#40495A" />
                        <RampLogo color="#40495A" />
                        <VercelLogo color="#40495A" />
                        <CashAppLogo color="#40495A" />
                        <RampLogo color="#40495A" />
                        <VercelLogo
                            color="#40495A"
                            className="hidden lg:block"
                        />
                        <CashAppLogo
                            color="#40495A"
                            className="hidden lg:block"
                        />
                        <RampLogo color="#40495A" className="hidden lg:block" />
                        <VercelLogo
                            color="#40495A"
                            className="hidden lg:block"
                        />
                        <CashAppLogo
                            color="#40495A"
                            className="hidden lg:block"
                        />
                        <RampLogo color="#40495A" className="hidden lg:block" />
                    </div>
                </div>
            </section>
            <section className="p-4">
                <div className="rounded-t-2xl mask grid place-content-center lg:max-w-6xl lg:mx-auto">
                    <div className="cursor-pointer underline decoration-white h-[300px] sm:h-[350px] md:h-[400px] flex flex-col items-center justify-center ">
                        <h2 className="transition hover:scale-[1.03] text-3xl text-center font-medium md:text-6xl bg-gradient-to-r from-blanco to-gris text-transparent bg-clip-text">
                            Desarrollo de software
                        </h2>
                    </div>
                </div>
            </section>
            <section className="h-[600px] grid place-items-center">
                <ContactBtn />
            </section>
        </>
    );
}

export default Home;
