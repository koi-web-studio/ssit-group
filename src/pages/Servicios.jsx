import { Lumiflex, Velustro, Tranquiluxe, Novatrix, Zenitho } from "uvcanvas";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Servicios() {
    return (
        <>
            <section className="h-[65vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium text-center flex flex-col">
                        <span className="text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            Nuestros Servicios
                        </span>
                    </h1>
                </div>
            </section>
            <section>
                <div className="flex flex-col items-stretch md:pt-32 text-blanco relative">
                    <div className="h-[400px] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full grid place-items-center">
                                <a
                                    href="https://www.myassistanceapp.com"
                                    className="cursor-pointer text-3xl md:text-5xl font-medium text-white transition hover:underline"
                                >
                                    My Assistence
                                </a>
                            </div>
                        </div>
                        <div className="relative top-0 left-0 h-full -z-10">
                            <Zenitho />
                        </div>
                    </div>
                    <div className="h-[400px] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full grid place-items-center">
                                <h3 className="cursor-pointer text-3xl md:text-5xl font-medium text-white transition hover:underline">
                                    My Assistence
                                </h3>
                            </div>
                        </div>
                        <div className="relative top-0 left-0 w-full h-full -z-10">
                            <Velustro />
                        </div>
                    </div>
                    <div className="h-[400px] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full grid place-items-center">
                                <h3 className="cursor-pointer text-3xl md:text-5xl font-medium text-white transition hover:underline">
                                    My Assistence
                                </h3>
                            </div>
                        </div>
                        <div className="relative top-0 left-0 w-full h-full -z-10">
                            <Tranquiluxe />
                        </div>
                    </div>
                    <div className="h-[400px] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full grid place-items-center">
                                <h3 className="cursor-pointer text-3xl md:text-5xl font-medium text-slate-600 transition hover:underline">
                                    My Assistence
                                </h3>
                            </div>
                        </div>
                        <div className="relative top-0 left-0 w-full h-full -z-10">
                            <Lumiflex />
                        </div>
                    </div>
                    <div className="h-[400px] relative">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full grid place-items-center">
                                <h3 className="cursor-pointer text-3xl md:text-5xl font-medium text-slate-600 transition hover:underline">
                                    My Assistence
                                </h3>
                            </div>
                        </div>
                        <div className="relative top-0 left-0 w-full h-full -z-10">
                            <Novatrix />
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[600px] grid place-items-center">
                <Link
                    to="/contacto"
                    className="border-4 border-[#40495A] p-2 px-4 rounded-full text-[#40495A] text-4xl md:text-5xl  transition hover:text-blanco hover:translate-x-1 inline-flex"
                >
                    Contactanos{" "}
                    <span className="mt-1">
                        <HiArrowNarrowRight />
                    </span>
                </Link>
            </section>
        </>
    );
}

export default Servicios;
