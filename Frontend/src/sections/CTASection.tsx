'use client'
import { motion } from "motion/react";

export default function CTASection() {
    return (
        <motion.div className="max-w-5xl py-16 mt-40 md:pl-20 md:w-full max-md:mx-4 md:mx-auto flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-linear-to-b from-blue-900 to-slate-900 rounded-2xl p-6 text-white border border-blue-800/30"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <div>
                <motion.h1 className="text-3xl md:text-[46px] md:leading-15 font-semibold bg-linear-to-r from-white to-teal-400 text-transparent bg-clip-text"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Built With Real Businesses, Not Just Code
                </motion.h1>
                <motion.p className="bg-linear-to-r from-gray-200 to-teal-200 text-transparent bg-clip-text text-lg mt-4 max-w-2xl"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    This early version is being shaped with real small business owners. As an early user, you’ll get direct access to the founder, priority features, and free usage for 3 months.
                </motion.p>
            </div>
            <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-full text-sm mt-8 md:mt-0 font-medium whitespace-nowrap"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Apply for Early Access →
            </motion.button>
        </motion.div>
    );
}