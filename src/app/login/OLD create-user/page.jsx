"use client";

const LoginPage = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastName = e.target.lastname.value;
    const email = e.target.email.value;
    const clave = e.target.password.value;
    console.log(name, lastName, email, clave);
    const tipoUser="User";

    const res = await fetch("/server/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        
        /* createAt  DateTime @default (now())
        tipoUser  String
        profile Profile? */
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    // <!-- component -->
    <form  onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Regístrate</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              placeholder="Nombres"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Apellidos"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Correo Electrónico"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Contraseña"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirmación Contraseña"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-slate-600 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Crear Cuenta
            </button>

            {/* <div className="text-center text-sm text-grey-dark mt-4">
                            Al registrarte 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div> */}
          </div>

          <div className="text-grey-dark mt-6">
            ¿Ya tienes una Cuenta?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              {" "}
              Inicia Sesión
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
