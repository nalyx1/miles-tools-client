"use client";
import { useState } from "react";
export default function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col align-center justify-center p-8 w-full max-w-md mx-auto md:h-screen lg:py-0">
      <div className="bg-gray-50 p-8 m-8 rounded-md bg-opacity-60">
        <h1 className="text-2xl font-bold mb-4">Crie sua conta</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex relative mb-2">
            <span className="flex rounded-l-md bg-gray-50 border border-gray-300 text-gray-900 px-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <input
              type="text"
              id="sign-up-username"
              name="username"
              className="flex-1 rounded-r-md bg-gray-50 border border-gray-300 text-gray-900 p-2 items-center focus:border-transparent"
              placeholder="Seu nome"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex relative mb-2">
            <span className="flex rounded-l-md bg-gray-50 border border-gray-300 text-gray-900 px-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <input
              type="text"
              id="sign-un-email"
              name="email"
              className="flex-1 rounded-r-md bg-gray-50 border border-gray-300 text-gray-900 p-2 items-center focus:border-transparent"
              placeholder="Seu E-mail"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex relative mb-2">
            <span className="flex rounded-l-md bg-gray-50 border border-gray-300 text-gray-900 px-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
            <input
              type="password"
              id="sign-up-password"
              name="password"
              className="flex-1 rounded-r-md bg-gray-50 border border-gray-300 text-gray-900 p-2 items-center focus:border-transparent"
              placeholder="Sua senha"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex relative mb-2">
            <span className="flex rounded-l-md bg-gray-50 border border-gray-300 text-gray-900 px-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
            <input
              type="password"
              id="sign-up-confirm-password"
              name="confirmPassword"
              className="flex-1 rounded-r-md bg-gray-50 border border-gray-300 text-gray-900 p-2 items-center focus:border-transparent"
              placeholder="Confirme sua senha"
              value={user.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="text-center w-full text-2xl my-4 border rounded-md relative cursor-pointer">
            <button type="submit" className="text-2xl font-semibold ">
              CADASTRAR
            </button>
          </div>

          <p className="text-center">Ja possui uma conta?</p>
          <p className="text-center relative">
            <a
              href="/login"
              className="cursor-pointer hover:border-b-2 hover:border-blue-900 text-blue-900"
            >
              Ir para login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

