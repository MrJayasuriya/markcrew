'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="flex justify-center mb-4">
                <span className="bg-teal-900/30 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-800/50">
                    Coming in Early Access
                </span>
            </div>
            <SectionTitle text1="Features" text2="What you get" text3="Everything you need to manage your customers." />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-16 px-6">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div key={index} className={`${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-teal-500 to-slate-800' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-[#0B1220] hover:bg-slate-900/50 transition duration-300 max-w-80 w-full">
                            {feature.icon}
                            <h3 className="text-base font-medium text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 line-clamp-2 pb-4">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-40 relative mx-auto max-w-5xl">
                <div className="absolute -z-50 size-100 -top-10 -left-20 aspect-square rounded-full bg-blue-600/20 blur-3xl"></div>
                <motion.p className="text-slate-300 text-lg text-left max-w-3xl"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Stop chasing payments. Let AI do it for you.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    <motion.div className="md:col-span-2"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <img className="h-full w-auto" src="/pixels-reactjs/assets/features-showcase-1.png" alt="features showcase" width={1000} height={500} />
                    </motion.div>
                    <motion.div className="md:col-span-1"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img src="/pixels-reactjs/assets/features-showcase-2.png" alt="features showcase" width={1000} height={500} className="hover:-translate-y-0.5 transition duration-300" />
                        <h3 className="text-[24px]/7.5 text-slate-300 font-medium mt-6">Turn Forgotten Dues into On-Time Payments</h3>
                        <p className="text-slate-300 mt-2">Small businesses lose money because follow-ups are manual and inconsistent. Your AI assistant works like a digital staff member—tracking dues, engaging customers, and keeping your cash flow healthy.</p>
                        <a href="#!" className="group flex items-center gap-2 mt-4 text-teal-400 hover:text-teal-500 transition">
                            See Real Examples
                            <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition duration-300" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}