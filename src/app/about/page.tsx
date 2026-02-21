import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about GK's Barbers. A welcoming, family-friendly barbershop in Egham, Surrey.",
};

const valueBullets = [
    "All ages welcome",
    "Precision cuts every visit",
    "Trusted in Egham",
];

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920"
                        alt="Barber working carefully"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    <div className="absolute inset-0 bg-background/80 backdrop-grayscale-[0.2]" />
                </div>

                <div className="container relative z-10 px-4 sm:px-8 text-center pt-20">
                    <h1 className="font-heading font-bold text-4xl md:text-6xl text-white mb-4">About GK&apos;s Barbers</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-card">
                <div className="container px-4 sm:px-8 mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-8">
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                                A Welcoming, Family-Friendly Atmosphere
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Located in the heart of Egham, GK&apos;s Barbers has built a reputation on reliable, high-quality grooming in a relaxed environment. Whether it&apos;s a child&apos;s first nervous haircut or a weekly skin-fade routine, we treat every client with the same level of care and professionalism.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our team understands that a barbershop is more than just a place to get a haircut—it&apos;s a staple of the community. We pride ourselves on creating an inclusive space where anyone can sit back, share a conversation, and walk out looking their absolute best.
                            </p>

                            <div className="pt-4 space-y-4">
                                <h3 className="font-heading font-semibold text-2xl text-white pb-2 border-b border-border/50 inline-block">Why GK&apos;s?</h3>
                                <ul className="space-y-4 pt-2 text-lg">
                                    {valueBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-foreground/90">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative bg-background border border-border">
                            <iframe
                                title="GK's Barbers Location"
                                width="100%"
                                height="100%"
                                className="absolute inset-0 grayscale-[0.5] contrast-[1.1] opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
                                src="https://maps.google.com/maps?q=1 The Precinct, High Street, Egham, Surrey TW20 9HN&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
