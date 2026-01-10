import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 799,
        period: "month",
        features: [
            "Up to 50 customers",
            "Auto reminders",
            "AI message generation",
            "SMS notifications"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 1499,
        period: "month",
        features: [
            "Up to 300 customers",
            "WhatsApp + SMS",
            "Multi-stage follow-ups",
            "Tone control (friendly / strict)",
            "Priority support"
        ],
        mostPopular: true
    },
    {
        name: "Business",
        price: 2999,
        period: "month",
        features: [
            "Unlimited customers",
            "Multiple staff accounts",
            "Advanced engagement rules",
            "Dedicated onboarding"
        ],
        mostPopular: false
    }
];