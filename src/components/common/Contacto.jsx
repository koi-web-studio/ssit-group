import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Contacto() {
    return (
        <section className="px-4 md:bg-[#DDD0FF]/50">
            <div className="min-h-[500px] grid place-content-center lg:max-w-5xl lg:mx-auto">
                <div className="flex flex-col items-center justify-center gap-8 py-8 md:flex-row">
                    <div>
                        <img
                            src="/contactanos.png"
                            alt=""
                            className="w-[200px]"
                        />
                    </div>
                    <div className="flex flex-col gap-8 items-center md:items-end">
                        <h3 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-blanco text-center">
                            ¿Tenés alguna duda?
                        </h3>
                        <p className="text-2xl md:text-3xl">
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
        </section>
    );
}

export default Contacto;
