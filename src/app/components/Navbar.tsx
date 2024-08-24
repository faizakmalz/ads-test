import Link from "next/link";
import type { User } from "./UserCard";
import { ReactPropTypes } from "react";

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 flex justify-between px-20 items-center py-4">
        <div className="font-bold text-[28px] text-white">ADS-TEST</div>
        <nav className="p-4">
          <ul className="flex justify-center space-x-8 text-lg font-semibold text-white">
            <li className="transition-transform transform hover:scale-105">
              <Link href="/">
                <p className="hover:text-blue-300">Home</p>
              </Link>
            </li>
            <li className="transition-transform transform hover:scale-105">
              {user ? (
                <Link href="/api/auth/signout">
                  <p className=" text-blue-200 hover:text-blue-300">Sign Out</p>
                </Link>
              ) : (
                <Link href="/api/auth/signin">
                  <p className="hover:text-blue-600">Sign In</p>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
