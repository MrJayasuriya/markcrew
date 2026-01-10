import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="Who Is This For?" text2="Is This You?" text3="We are building this specifically for these businesses." />

            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 max-w-4xl mx-auto">
                <div className="flex flex-col gap-4 text-slate-300 text-lg">
                    {[
                        "Small finance offices",
                        "Second-hand vehicle dealers",
                        "Service businesses with recurring customers",
                        "Anyone who manually tracks dues and follow-ups"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-blue-900/20 rounded-xl border border-blue-900/30">
                            <div className="shrink-0 size-2 rounded-full bg-teal-500" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}