import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import type { INavLink } from "../types";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <a href="#" className="text-2xl font-bold bg-linear-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                    markcrew
                </a>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link: INavLink) => (
                        <a href={link.href} className="hover:text-teal-400 transition text-gray-300">{link.name}</a>
                    ))}
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-teal-500 hover:bg-teal-600 active:scale-95 transition-all rounded-full text-black font-medium">
                    Start free trial
                </button>
                <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-200">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-[#0B1220]/90 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navlinks.map((link: INavLink) => (
                    <a href={link.href} onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-teal-400">
                        {link.name}
                    </a>
                ))}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-teal-500/50 aspect-square size-10 p-1 items-center justify-center bg-teal-500 hover:bg-teal-600 transition text-black rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}