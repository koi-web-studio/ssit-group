import { Link } from "react-router-dom";
import { TbMessageCircle2 } from "react-icons/tb";

function ContactBtn() {
    return (
        <>
            <Link
                to="/contacto"
                className="bg-[#40495A] p-2 px-4 rounded-full text-white text-4xl md:text-5xl  transition hover:opacity-80 hover:translate-x-1 inline-flex"
            >
                Contactanos{" "}
                <span className="mb-1 ml-1">
                    <TbMessageCircle2 />
                </span>
            </Link>
        </>
    );
}

export default ContactBtn;
