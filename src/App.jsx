import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error";
import Servicios from "./pages/Servicios";
import ScrollBtn from "./components/ui/ScrollBtn";
import Proyectos from "./pages/Proyectos";

function App() {
    return (
        <>
            <ScrollToTop />
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
                </div>
            </div>
            <Navbar />
            <ScrollBtn />
            <main className="relative grow">
                <Routes>
                    <Route exac path="/" element={<Home />} />
                    <Route exac path="/contacto" element={<Contacto />} />
                    <Route exac path="/servicios" element={<Servicios />} />
                    <Route exac path="/proyectos" element={<Proyectos />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
