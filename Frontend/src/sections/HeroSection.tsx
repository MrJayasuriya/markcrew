'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";

import { motion } from "motion/react";

export default function HeroSection() {
    const specialFeatures = [
        "Limited early access",
        "Built for small finance & service businesses",
        "Personal onboarding & support",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-blue-600/40 blur-[300px]"></div>
            <motion.a href="#!" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-teal-100 bg-blue-900/30 border border-blue-900/50"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-teal-600 text-white text-xs px-3.5 py-1 rounded-full">
                    EARLY ACCESS
                </span>
                <p className="flex items-center gap-1">
                    <span>Help shape the product </span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </motion.a>
            <motion.h1 className="text-4xl md:text-6xl/21 font-medium max-w-3xl text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                AI That Engages Customers & {" "}
                <span className="move-gradient px-3 rounded-xl whitespace-normal md:whitespace-nowrap inline-block leading-normal py-1">Secures Payments</span>
            </motion.h1>
            <motion.p className="text-base text-center text-gray-400 max-w-lg mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                We’re inviting a small group of early users to try our AI assistant for free for 3 months and help shape the future of customer engagement for small businesses.</motion.p>
            <motion.div className="flex flex-col md:flex-row items-center gap-4 mt-8 w-full md:w-auto px-4 md:px-0"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-7 h-11 w-full md:w-auto font-medium shadow-lg shadow-teal-500/20"
                >
                    Join Early Access – Free for 3 Months
                </button>
                <a href="https://calendly.com/jayasuriyathedatascientist/30min" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 border border-blue-800 hover:bg-blue-900/30 text-gray-300 transition rounded-full px-6 h-11 w-full md:w-auto">
                    <VideoIcon strokeWidth={1} />
                    <span>Request a Demo</span>
                </a>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
                {specialFeatures.map((feature, index) => (
                    <motion.p className="flex items-center gap-2" key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        <CheckIcon className="size-5 text-teal-500" />
                        <span className="text-gray-400">{feature}</span>
                    </motion.p>
                ))}
            </div>

        </div>
    );
}