import { Metadata } from "next";
import Link from "next/link";
import { Scissors, CheckCircle, Baby, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Services",
    description: "Professional barbering services in Egham. Haircuts, fades, beard trims, and children's cuts.",
};

const services = [
    {
        id: "haircut",
        name: "Classic Haircut",
        description: "Traditional scissor or clipper cut tailored to your style.",
        icon: Scissors,
        isPopular: false,
    },
    {
        id: "fade",
        name: "Skin Fade",
        description: "Precision fading down to the skin for a sharp, modern finish.",
        icon: CheckCircle,
        isPopular: false,
    },
    {
        id: "children",
        name: "Children's Cut",
        description: "Patient and friendly service to keep the little ones looking smart.",
        icon: Baby,
        isPopular: true,
    },
    {
        id: "beard",
        name: "Beard Trim & Shape",
        description: "Tidy up and sharp lines, finished with premium beard oils.",
        icon: User,
        isPopular: false,
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-[80vh] py-20">
            <div className="container px-4 sm:px-8 mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">Our Services</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
                        From timeless classics to modern trends, we deliver precision and style in every chair.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <Card key={service.id} className="bg-card border-border/50 hover:border-primary/50 transition-all flex flex-col h-full overflow-hidden">
                            <CardHeader className="bg-background/40 border-b border-border/30 flex-row items-center justify-between space-y-0 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="font-heading text-xl md:text-2xl text-white">
                                        {service.name}
                                    </CardTitle>
                                </div>
                                {service.isPopular && (
                                    <Badge variant="default" className="bg-primary hover:bg-primary text-primary-foreground">
                                        Family Favourite
                                    </Badge>
                                )}
                            </CardHeader>
                            <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-6">
                                <p className="text-muted-foreground text-lg">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                    <span className="font-semibold text-foreground/80 italic">Price on request</span>
                                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                                        <Link href="tel:01784557002">Contact us to book</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center bg-card rounded-3xl p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
                    <h2 className="font-heading font-bold text-3xl text-white mb-4">Not sure what you need?</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Give us a call or drop in. Our barbers are happy to consult and find the perfect style for you.
                    </p>
                    <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="tel:01784557002">Call 01784 557002</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
