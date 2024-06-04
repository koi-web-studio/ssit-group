import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

function ContactanosCTA() {
    return (
        <Link to="/contacto" className="transition hover:translate-x-1">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white h-10 px-4 py-2 sm:text-base">
                contactanos{" "}
                <span className="ml-1">
                    <HiArrowNarrowRight className="text-lg" />
                </span>
            </button>
        </Link>
    );
}

export default ContactanosCTA;
