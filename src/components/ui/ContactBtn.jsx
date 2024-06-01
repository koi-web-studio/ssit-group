import { Link } from "react-router-dom";
import { TbMessageCircle2 } from "react-icons/tb";

function ContactBtn() {
    return (
        <>
            <Link
                to="/contacto"
                className="bg-[#40495A] p-2 px-4 rounded-2xl text-white text-2xl md:text-3xl  transition hover:opacity-80 hover:scale-105 inline-flex"
            >
                Contactanos{" "}
                <span className="mt-1 ml-1">
                    <TbMessageCircle2 />
                </span>
            </Link>
        </>
    );
}

export default ContactBtn;
