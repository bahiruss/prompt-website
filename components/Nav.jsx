"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useContext } from 'react';
import { ThemeContext } from "@context/ThemeContext";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [isDefaultMode, setIsDefaultMode] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const { switchDark, switchLight, theme } = useContext(ThemeContext);


  const toggleDefaultMode = () => {
    setIsDefaultMode(!isDefaultMode);
    setIsNightMode(false);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    setIsDefaultMode(false);
  };


  return (
    <nav
      className={`flex-between w-full mb-16 pt-3 ${
        isNightMode ? "night-mode" : "default-mode"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="">
        {session?.user ? (
          <div className="flex justify-between">
            <div>
              <Link href="/" className="flex gap-2 flex-center">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="logo_text">Promptopia</p>
              </Link>
            </div>
            <div className="flex right-auto">
              <Link
                href="/create-prompt"
                className="black_sin"
                onClick={() => setToggleDropdown(false)}
              >
                Create Post
              </Link>

              <button type="button" onClick={signOut} className="black_sin">
                Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
              <button
                className="w-9 h-9 border-none rounded-full text-white text-3xl cursor-pointer flex items-center justify-center"
                onClick={theme === "dark" ? switchLight : switchDark}
              >
                {theme === "dark" ? "🌝" : "🌛"}
              </button>
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className=""
                ></button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="relative flex">
        {session?.user ? (
          <div className="outlines_btn">
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btnn flex right-auto justify-end"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
