import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Find us at 1 The Precinct, High Street, Egham. Call 01784 557002 to book an appointment.",
};

const hours = [
    { day: "Monday", time: "8:30 AM - 7:00 PM" },
    { day: "Tuesday", time: "8:30 AM - 7:00 PM" },
    { day: "Wednesday", time: "8:30 AM - 7:00 PM" },
    { day: "Thursday", time: "8:30 AM - 7:00 PM" },
    { day: "Friday", time: "8:30 AM - 7:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "9:00 AM - 4:00 PM" },
];

export default function ContactPage() {
    return (
        <div className="bg-background min-h-[80vh] py-20">
            <div className="container px-4 sm:px-8 mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">Contact & Location</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
                        We operate primarily on walk-ins but welcome calls to book ahead or check wait times. No complicated forms—just drop in or give us a ring!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Info Cards */}
                    <div className="space-y-6">
                        <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors shadow-lg shadow-black/20">
                            <CardContent className="p-8 flex items-start gap-6">
                                <div className="p-4 bg-primary/10 rounded-full shrink-0">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-heading font-bold text-2xl text-white mb-2">Location</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        1 The Precinct<br />
                                        High Street, Egham<br />
                                        Surrey TW20 9HN
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 hover:border-primary/30 transition-colors shadow-lg shadow-black/20">
                            <CardContent className="p-8 flex items-start gap-6">
                                <div className="p-4 bg-primary/10 rounded-full shrink-0">
                                    <Phone className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h2 className="font-heading font-bold text-2xl text-white mb-2">Call Us</h2>
                                    <Link href="tel:01784557002" className="text-xl text-primary font-semibold hover:underline decoration-2 underline-offset-4">
                                        01784 557002
                                    </Link>
                                    <p className="text-muted-foreground mt-2">
                                        Call during opening hours for inquiries.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-border/50 shadow-lg shadow-black/20">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Clock className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="font-heading font-bold text-2xl text-white">Opening Hours</h2>
                                </div>
                                <ul className="space-y-3">
                                    {hours.map((h, i) => (
                                        <li key={i} className={`flex justify-between items-center ${i !== hours.length - 1 ? "pb-3 border-b border-border/40" : ""}`}>
                                            <span className="text-foreground">{h.day}</span>
                                            <span className="text-primary font-medium">{h.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map Embed */}
                    <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl relative bg-card border border-border">
                        <iframe
                            title="Google Map showing GK's Barbers in Egham"
                            width="100%"
                            height="100%"
                            className="absolute inset-0 grayscale-[0.3] contrast-[1.1] opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
                            src="https://maps.google.com/maps?q=1 The Precinct, High Street, Egham, Surrey TW20 9HN&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
