import { useForm } from "react-hook-form";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";
import people from "../assets/puple.svg";

function Contacto() {
    const [message, setMessage] = useState("Enviar");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    function onsubmit(data) {
        setMessage("Enviando...");
        emailjs
            .send(
                import.meta.VITE_SERVICE_ID,
                import.meta.VITE_TEMPLATE_ID,
                data,
                {
                    publicKey: import.meta.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    Swal.fire({
                        title: "Mensaje enviado!",
                        icon: "success",
                        background: "#1c1d4a",
                        iconColor: "#d1d1d1",
                        color: "#d1d1d1",
                        confirmButtonColor: "transparent",
                    });
                    setMessage("Enviar");
                    reset();
                },
                (error) => {
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
            );
    }

    return (
        <>
            <Helmet>
                <title>Contactanos - ssit group</title>
                <meta
                    name="description"
                    content="¿Tienes alguna consulta? No dudes en escribirnos
                                y te responderemos lo antes posible"
                />
                <link
                    rel="canonical"
                    href="https://ssit-group.vercel.app/contacto"
                />
            </Helmet>
            <div className="p-3 py-8 md:py-6 grid place-items-center">
                <div className="flex flex-col gap-8 lg:flex-row lg:max-w-5xl lg:mx-auto">
                    <div className="flex flex-col justify-center items-center gap-8 sm:w-[70%] sm:mx-auto text-center py-10 card rounded-xl md:p-10 text-blanco border border-gray-500/20 selection:bg-slate-500/50 selection:text-white cursor-default lg:justify-between">
                        <h2 className="text-6xl text-blanco">Contacto</h2>
                        <div className="flex flex-col gap-8 mx-auto py-4">
                            <p className="text-xl flex items-center gap-1 self-start text-negro-200">
                                <span>
                                    <BsTelephone />
                                </span>{" "}
                                +543814216472
                            </p>
                            <p className="text-xl flex items-center gap-1 self-start text-negro-200">
                                <span>
                                    <MdMailOutline />
                                </span>{" "}
                                info@seissigmagroup.com.ar
                            </p>
                        </div>
                        <div className="relative self-stretch mx-auto">
                            <img
                                src={people}
                                alt="logo ssit"
                                className="w-[250px]"
                            />
                            <h2 className="absolute bottom-8 left-4 text-lg text-blanco font-semibold">
                                SSIT Group
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 py-6 px-4 sm:w-[70%] sm:mx-auto rounded-xl md:p-10 card border border-gray-500/20">
                        <div className="flex flex-col selection:bg-slate-500/50 selection:text-white">
                            <h3 className="text-6xl text-center textto-blanco">
                                Escribinos
                            </h3>
                            <p className="text-lg text-gray-500 my-2 text-center">
                                ¿Tienes alguna consulta? No dudes en escribirnos
                                y te responderemos lo antes posible
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-2"
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
                            <button className="text-blanco text-lg md:text-xl bg-slate-500/20 rounded-lg p-2 transition-colors hover:bg-slate-700 hover:text-white">
                                {message}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;
