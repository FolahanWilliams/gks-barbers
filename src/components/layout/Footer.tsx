import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card">
            <div className="container mx-auto px-4 sm:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-bold text-2xl text-primary">GK&apos;s Barbers</h3>
                        <p className="text-muted-foreground">
                            Sharp cuts for every generation. Traditional and modern barbering in Egham, Surrey.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-lg">Contact Us</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>1 The Precinct, High Street<br />Egham, Surrey TW20 9HN</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <Link href="tel:01784557002" className="hover:text-primary transition-colors">
                                    01784 557002
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-semibold text-lg">Opening Hours</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>8:30 AM - 7:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>9:00 AM - 4:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground/60">
                    <p>&copy; {new Date().getFullYear()} GK&apos;s Barbers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
