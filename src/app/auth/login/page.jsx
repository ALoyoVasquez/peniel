"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
      //window.location.href="/";
    }

    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <h1 className="font-bold text-2xl mb-4 text-slate-400">Login</h1>

      <form onSubmit={onSubmit} className="w-1/4">
        {error && <p className="bg-red-500 text-lg text-white p-3 rounded ">{error}</p>}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Please enter your email address.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="email@mail.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message} </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Please enter your password.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="****"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}{" "}
          </span>
        )}
        <button className="w-full bg-blue-500 rounded-lg p-3 mt-2">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
