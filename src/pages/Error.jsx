import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactBtn from "../components/ui/ContactBtn";

function Error() {
    return (
        <>
            <Helmet>
                <title>Error - ssit group</title>
                <link rel="canonical" href="https://ssit-group.vercel.app" />
                <meta name="description" content="SSIT GROUP" />
            </Helmet>
            <section className="h-full flex flex-col gap-8 items-center">
                <div className="my-24 lg:mb-0 flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
                        <div className="flex flex-col lg:flex-row lg:pr-16 items-center lg:border-r-2 lg:border-slate-400">
                            <h1 className="text-slate-500 text-6xl sm:text-7xl md:text-8xl xl:text-9xl">
                                Error
                            </h1>
                        </div>
                        <p className="text-xl text-center text-slate-500 px-2 lg:text-start">
                            Página no encontrada <br /> Regresa al inicio para
                            continuar
                        </p>
                    </div>
                    <Link
                        to="/"
                        className="btn text-blanco flex items-center text-2xl bg-white/30 rounded-lg p-1 px-4 border border-gray-400/30 border-spacing-1 transition-colors hover:bg-white hover:text-blanco"
                    >
                        Volver al inicio
                    </Link>
                </div>
                <div className="py-24">
                    <ContactBtn />
                </div>
            </section>
        </>
    );
}

export default Error;
