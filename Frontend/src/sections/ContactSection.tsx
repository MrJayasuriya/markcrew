'use client'
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, PhoneIcon } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        painPoint: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://markcrew-backend.vercel.app/early-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,
                    pain_point: formData.painPoint
                }),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setStatus("success");
            setFormData({ name: "", email: "", mobile: "", painPoint: "" });
            toast.success("Application Sent! We'll be in touch.");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Early Access Application" text2="Join the Program" text3="Tell us a bit about your business and your biggest pain points." />
            <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full' >
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Your name</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-teal-500 transition-colors'>
                        <UserIcon className='size-5 text-gray-400' />
                        <input
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            type="text"
                            placeholder='Enter your name'
                            className='w-full p-3 outline-none bg-transparent placeholder-gray-500'
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Email id</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-teal-500 transition-colors'>
                        <MailIcon className='size-5 text-gray-400' />
                        <input
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                            placeholder='Enter your email'
                            className='w-full p-3 outline-none bg-transparent placeholder-gray-500'
                        />
                    </div>
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Mobile Number</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-teal-500 transition-colors'>
                        <PhoneIcon className='size-5 text-gray-400' />
                        <input
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            type="tel"
                            placeholder='Enter your mobile number'
                            className='w-full p-3 outline-none bg-transparent placeholder-gray-500'
                        />
                    </div>
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>What is your biggest pain point with customer follow-ups?</p>
                    <textarea
                        name='painPoint'
                        value={formData.painPoint}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder='e.g., I forget to call, Customers ignore my messages...'
                        className='focus:border-teal-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 bg-transparent placeholder-gray-500 transition-colors'
                    />
                </motion.div>



                <motion.button
                    type='submit'
                    disabled={status === 'loading' || status === 'success'}
                    className='w-max flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 disabled:cursor-not-allowed text-white px-10 py-3 rounded-full font-medium transition'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Application Sent!' : 'Apply for Early Access'}
                    {status !== 'loading' && <ArrowRightIcon className="size-5" />}
                </motion.button>
                {status === 'error' && <p className="text-red-500 col-span-2 text-center">Something went wrong. Please try again.</p>}
            </form>
        </div>
    );
}