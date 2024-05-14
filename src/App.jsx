import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

function App() {
    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <div className="relative h-full w-full bg-slate-950">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
                </div>
            </div>
            <main className="relative grow">
                <Routes>
                    <Route exac path="/" element={<Home />} />
                    <Route exac path="/contacto" element={<Contacto />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
