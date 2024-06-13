import { IoIosArrowUp } from "react-icons/io";

function ScrollBtn() {
    return (
        <div className="hidden sm:block scroll-btn fixed bottom-5 right-5 bg-slate-500 p-1 px-2 rounded-3xl z-50 transition-colors hover:bg-slate-700">
            <button
                className="text-2xl md:text-4xl text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <IoIosArrowUp />
            </button>
        </div>
    );
}

export default ScrollBtn;
