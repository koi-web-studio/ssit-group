import ContactBtn from "../components/ui/ContactBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

AOS.init({
    duration: 500,
    once: true,
    easing: "ease",
});

function Servicios() {
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
            <section className="h-[65vh] px-4 grid place-items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 cursor-default text-4xl sm:text-6xl xl:text-7xl font-medium text-center flex flex-col">
                        <span className="text-blanco md:bg-gradient-to-r md:from-blanco md:to-gris md:text-transparent md:bg-clip-text">
                            Nuestros Servicios
                        </span>
                    </h1>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center bg-pink-600/40"
                id="consultoria_it"
            >
                <div>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white">
                        Consultoria IT
                    </h2>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center bg-blue-600/40"
                id="desarrollo_de_software"
            >
                <div>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white">
                        Desarrollo de Software
                    </h2>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center relative"
                id="diseño_y_desarrollo_web"
            >
                <div className="absolute top-0 left-0 h-full w-full -z-10 bg-center bg-cover bg-koi blur-effect"></div>
                <div>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl text-rose-800 font-bold">
                        Diseño y Desarrollo web
                    </h2>
                </div>
            </section>
            <section className="h-[600px] grid place-items-center">
                <ContactBtn />
            </section>
        </>
    );
}

export default Servicios;
