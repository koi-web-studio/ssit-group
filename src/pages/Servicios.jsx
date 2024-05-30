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
                <div className="flex flex-col items-center md:w-1/2 gap-8 bg-white/50 p-4 md:p-6 rounded-md">
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white">
                        Consultoria IT
                    </h2>
                    <p className="text-xl text-white/80">
                        Ofrecer servicios en tiempo real para optimizar los
                        recursos tecnológicos implementados. Como consultora
                        integradora de tecnologías informáticas, nuestro
                        objetivo es lograr y mantener una posición de liderazgo
                        en el mercado de TI, proporcionando soluciones que
                        alineen a cada organización con sus objetivos
                        estratégicos.
                    </p>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center bg-blue-600/40"
                id="desarrollo_de_software"
            >
                <div className="flex flex-col items-center md:w-1/2 gap-8 bg-white/50 p-4 md:p-6 rounded-md">
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white text-center">
                        Desarrollo de Software
                    </h2>
                    <p className="text-xl text-white/80">
                        Nos especializamos en proyectos de desarrollo de
                        software de alta calidad, tanto in situ como remotos.
                        Creamos soluciones en diversas plataformas, empleando
                        herramientas de vanguardia, metodologías ágiles y
                        estándares de última generación que garantizan un
                        desarrollo exitoso.
                    </p>
                </div>
            </section>
            <section
                className="h-screen grid place-items-center relative"
                id="diseño_y_desarrollo_web"
            >
                <div className="absolute top-0 left-0 h-full w-full -z-10 bg-center bg-cover bg-koi blur-effect"></div>
                <div className="flex flex-col items-center md:w-1/2 gap-8 bg-white/50 p-4 md:p-6 rounded-md">
                    <h2 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl text-rose-800 font-bold text-center">
                        Diseño y Desarrollo web
                    </h2>
                    <p className="text-xl text-rose-800/80">
                        Ofrecemos soluciones creativas y eficientes,
                        personalizando cada proyecto para satisfacer las
                        necesidades de empresas institucionales y particulares.
                        Escuchamos tus necesidades y te acompañamos en el
                        crecimiento de tu empresa, abordando cada nuevo desafío
                        con responsabilidad para lograr los mejores resultados.
                        Estamos aquí para ayudarte a mejorar tu imagen y
                        alcanzar tus objetivos.
                    </p>
                </div>
            </section>
            <section className="h-[600px] grid place-items-center">
                <ContactBtn />
            </section>
        </>
    );
}

export default Servicios;
