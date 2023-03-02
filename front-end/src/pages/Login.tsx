import React from "react";
import waves from "../assets/waves.svg";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { BsGoogle, BsGithub } from "react-icons/bs";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();

  console.log(data);
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full ">
        <div
          className="bg-[#15171a] h-[580px] w-[450px] z-20 rounded-lg
        shadow-lg shadow-black text-gray-200"
        >
          <div
            className="flex flex-col space-y-2 justify-center items-center 
          h-full w-full px-8"
          >
            <h1 className="text-[33px] font-bold pt-3">
              Login to Your Account
            </h1>
            <p className="text-gray-500">The Best Chat App</p>
            <div className="flex space-x-1 w-full pt-3">
              <div
                className="w-full h-14 rounded-lg flex justify-center items-center p-[1px]
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]"
              >
                <div
                  className="bg-[#15171a] w-full h-full flex space-x-2
                justify-center items-center rounded-lg cursor-pointer
                hover:bg-gradient-to-r hover:from-[#ef6b2e]/40 hover:via-[#bc5c78]/40 
                hover:to-[#9d5399]/40"
                >
                  <div>
                    <BsGoogle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-md" onClick={() => signIn("google")}>
                      Login With Google
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-14 rounded-lg flex justify-center items-center p-[1px]
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]"
              >
                <div
                  className="bg-[#15171a] w-full h-full flex space-x-2
                justify-center items-center rounded-lg cursor-pointer
                hover:bg-gradient-to-r hover:from-[#ef6b2e]/40 hover:via-[#bc5c78]/40 
                hover:to-[#9d5399]/40"
                >
                  <div>
                    <BsGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-md">Login With Github</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500"> -- OR -- </p>
            <form>
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-[#222222] "
                placeholder="Email"
                type="email"
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-[#222222]"
                placeholder="Password"
                type="password"
              />
              <button
                className="w-full h-14 mt-3 rounded-lg 
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]
              hover:from-[#ef6b2e]/80 hover:via-[#bc5c78]/80 hover:to-[#9d5399]/80
              "
              >
                Login to your Account
              </button>
            </form>
            <div className="flex space-x-2 pb-3 py-3">
              <p className="text-gray-500 text-md">Not a member yet?</p>
              <p className="underline text-md">Register Now</p>
            </div>
            <div className="flex text-gray-500 justify-between w-full text-sm mt-10">
              <p>Privacy policy</p>
              <p>Copyright 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden ">
        <Image
          src={waves}
          alt="waves"
          className="absolute -bottom-0 w-[100%] shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default Login;
