"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { httpaxios } from "@/helper/httphelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import Modals from "@/components/Modals";
import Loading from "@/components/Loading";
import { POST } from "../api/authorize/login/route";

export default function Page() {
  const router = useRouter();

  const [isloading, setLoading] = useState(false);
  const [err, setError] = useState("");
  const [user, setUser] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (user.email.trim() === "") {
        toast.warning("Email is required");
        return;
      } else if (user.name.trim() === "") {
        toast.warning("Name is required");
        return;
      } else if (user.password.trim() === "") {
        toast.warning("Password is required");
        return;
      }
      const response = await fetch("/api/authorize/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok && response.status === 201) {
        toast.success("Account Created Successfully");
        router.push("/login");
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full  mt-10">
      <form
        className="bg-white mx-5 rounded-md px-10 py-10 md:mx-auto md:w-[80%] lg:w-[50%] "
        onSubmit={handleSumbit}
      >
        <h2 className="text-slate-700 text-2xl text-center pt-7">
          Create account on <span className={`font-semibold `}>GlobeMart</span>
        </h2>

        <div className="text-red-500 text-lg text-center font-bold">{err}</div>
        <div className="mt-10">
          <label className="font-semibold text-slate-700" htmlFor="name">
            Full Name
          </label>
          <br />
          <input
            className="w-full bg-slate-200 h-10 px-4 rounded-sm"
            required
            type="text"
            id="name"
            name="name"
            placeholder="Ex: Rasel"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-4">
          <label className="font-semibold text-slate-700" htmlFor="email">
            Enter email
          </label>
          <br />
          <input
            className="w-full bg-slate-200 h-10 px-4 rounded-sm"
            required
            type="email"
            id="email"
            name="email"
            placeholder="Rasel@gmail.com"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div className=" mt-4">
          <label className="font-semibold text-slate-700" htmlFor="password">
            Enter password
          </label>
          <br />
          <input
            className="w-full bg-slate-200 h-10 px-4 rounded-sm"
            required
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="w-full bg-gray-800 text-white mt-4 text-xl rounded-sm h-10"
          type='submit'
        >
          Create Account
        </button>
        <p className=" text-slate-700 mt-4 font-medium">
          Already have an Account?{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </span>
        </p>
      </form>

      <ToastContainer />

      <Modals isOpen={isloading}>
        <Loading />
      </Modals>
    </section>
  );
}
