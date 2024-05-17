import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
/* import { FaLocationDot } from "react-icons/fa6"; */
/* import { Helmet } from "react-helmet-async"; */
/* import { sendEmail } from "../helpers/queries"; */
/* import Swal from "sweetalert2"; */

function Contacto() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function onsubmit(data) {
        console.log(data);
        /* const res = await sendEmail(data); */
        /* if (!res.ok) {
            Swal.fire({
                title: "Error!",
                text: "El mensaje no pudo ser enviado",
                icon: "error",
                background: "#ef4444",
                iconColor: "#d1d1d1",
                color: "#d1d1d1",
                confirmButtonColor: "transparent",
            });
        }
        Swal.fire({
            title: "Mensaje enviado!",
            icon: "success",
            background: "#1c1d4a",
            iconColor: "#d1d1d1",
            color: "#d1d1d1",
            confirmButtonColor: "transparent",
        }); */
        reset();
    }

    return (
        <>
            {/* <Helmet>
                <title>Contactanos - Boulevard Sur</title>
                <meta
                    name="description"
                    content="¿Tienes alguna consulta? No dudes en escribirnos
                                y te responderemos lo antes posible"
                />
                <link
                    rel="canonical"
                    href="https://boulevard-sur.vercel.app/contacto"
                />
            </Helmet> */}
            <div className="my-[15%] px-3 lg:px-0 lg:flex justify-between lg:my-0 lg:py-0">
                <div className="hidden lg:block grow w-1/2 bg-contacto text-white">
                    ssit group
                </div>
                <div className="flex flex-col gap-8 md:gap-10 md:items-center lg:w-1/2 lg:ms-auto lg:py-[10%]">
                    <div className="flex flex-col justify-center items-center gap-8 sm:w-3/5 sm:mx-auto lg:w-[70%] text-center py-10 card rounded-xl md:p-10 text-blanco border border-gray-500/20">
                        <h2 className="text-6xl text-blanco">Contacto</h2>
                        <div className="flex flex-col gap-8 mx-auto py-4">
                            <p className="text-xl flex items-center gap-1 self-start text-negro-200">
                                <span>
                                    <FaPhoneAlt />
                                </span>{" "}
                                54-387-4311455
                            </p>
                            <p className="text-xl flex items-center gap-1 self-start text-negro-200">
                                <span>
                                    <MdEmail />
                                </span>{" "}
                                info@boulevardsur.com.ar
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 py-6 px-2 sm:w-3/5 sm:mx-auto lg:w-[70%] rounded-xl md:p-10 card border border-gray-500/20">
                        <div className="flex flex-col">
                            <h3 className="text-6xl text-center textto-blanco">
                                Escribinos
                            </h3>
                            <p className="text-xl text-gray-500 my-2 text-center">
                                ¿Tienes alguna consulta? No dudes en escribirnos
                                y te responderemos lo antes posible
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleSubmit(onsubmit)}
                        >
                            <div className="">
                                <input
                                    type="text"
                                    id="nombre"
                                    placeholder="Nombre"
                                    name="nombre"
                                    className="w-full input"
                                    {...register("nombre", {
                                        required: "ingrese su nombre",
                                        minLength: {
                                            value: 2,
                                            message: "ingrese un nombre valido",
                                        },
                                        validate: (value) => {
                                            if (/\d/.test(value)) {
                                                return "Ingrese solo texto";
                                            } else {
                                                return true;
                                            }
                                        },
                                    })}
                                />
                                {errors.nombre && (
                                    <small className="text-red-700">
                                        {errors.nombre.message}
                                    </small>
                                )}
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    placeholder="Apellido"
                                    className="w-full input"
                                    {...register("apellido", {
                                        required: "ingrese su apellido",
                                        minLength: {
                                            value: 2,
                                            message:
                                                "ingrese un apellido valido",
                                        },
                                        validate: (value) => {
                                            if (/\d/.test(value)) {
                                                return "Ingrese solo texto";
                                            } else {
                                                return true;
                                            }
                                        },
                                    })}
                                />
                                {errors.apellido && (
                                    <small className="text-red-700">
                                        {errors.apellido.message}
                                    </small>
                                )}
                            </div>
                            <div className="">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full input"
                                    {...register("email", {
                                        required:
                                            "ingrese su correo electronico",
                                        pattern: {
                                            value: /.+\@.+\..+/,
                                            message: "ingrese un correo valido",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <small className="text-red-700">
                                        {errors.email.message}
                                    </small>
                                )}
                            </div>
                            <div className="">
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                    className="w-full textarea"
                                    placeholder="Escribe tu mensaje..."
                                    {...register("mensaje", {
                                        required: "ingrese un mensaje",
                                    })}
                                ></textarea>
                                {errors.mensaje && (
                                    <small className="text-red-700">
                                        {errors.mensaje.message}
                                    </small>
                                )}
                            </div>
                            <button className="text-blanco gap-4 text-xl md:text-2xl bg-slate-500/20 rounded-lg p-1 px-2 transition-colors hover:bg-slate-700 hover:text-white">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;
