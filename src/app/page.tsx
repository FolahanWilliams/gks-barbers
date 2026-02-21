import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, Scissors } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "GK's Barbers",
  telephone: "01784 557002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 The Precinct, High Street",
    addressLocality: "Egham",
    postalCode: "TW20 9HN",
    addressCountry: "GB",
  },
};

const valueProps = [
  {
    title: "Walk-ins Welcome",
    description: "Drop by whenever you need a fresh look. We always try to accommodate walk-ins quickly.",
    icon: Clock,
  },
  {
    title: "All Ages and Styles",
    description: "From children's first haircuts to classic senior trims and modern skin fades.",
    icon: Users,
  },
  {
    title: "Precision Every Time",
    description: "Experienced barbers dedicated to delivering high-quality, sharp results.",
    icon: Scissors,
  },
];

const reviews = [
  {
    id: 1,
    author: "Mark D.",
    text: "Outstanding service from the team. The attention to detail on the skin fade was perfect, and the traditional hot towel shave was an absolute five-star experience. Highly recommend GK's Barbers.",
    rating: 5,
  },
  {
    id: 2,
    author: "Sarah T.",
    text: "Took my young son in for a haircut and the barber was brilliant with him. Kept him calm and entertained throughout, and the cut looks incredibly sharp. Definitely our new family favourite spot in Egham!",
    rating: 5,
  },
  {
    id: 3,
    author: "James H.",
    text: "Best barbershop in town. Walked in on a Saturday morning, didn't have to wait long, and got a precision cut. The atmosphere is traditional but stylish. You won't find a better cut anywhere else.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585747860136-15fb86ec18bc?auto=format&fit=crop&q=80&w=1920"
            alt="Interior of GK's Barbershop"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-background/80 backdrop-grayscale-[0.5]" />
        </div>

        <div className="container relative z-10 px-4 sm:px-8 text-center max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight tracking-tight text-white drop-shadow-sm">
            Sharp Cuts for <span className="text-primary italic">Every Generation</span>.
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto font-medium">
            Experience traditional barbering with modern precision in the heart of Egham.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="tel:01784557002">Call to Book</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary text-primary hover:bg-primary/10">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Why Choose GK&apos;s?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-2">
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Hours Section */}
      <section className="py-20 bg-background overflow-hidden border-y border-border/50">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Always Ready for You</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether planting the seed of a family tradition with your child&apos;s first cut, or maintaining your signature look, our team is here 7 days a week.
              </p>

              <Card className="bg-card/50 border-primary/20 shadow-xl shadow-black/20">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading font-bold text-2xl text-white mb-6 flex items-center gap-3">
                    <Clock className="text-primary w-6 h-6" /> Open All Week
                  </h3>
                  <ul className="space-y-4 text-base font-medium">
                    <li className="flex justify-between items-center pb-4 border-b border-border/50">
                      <span className="text-foreground">Monday - Friday</span>
                      <span className="text-primary font-bold">8:30 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center pb-4 border-b border-border/50">
                      <span className="text-foreground">Saturday</span>
                      <span className="text-primary font-bold">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-foreground">Sunday</span>
                      <span className="text-primary font-bold">9:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800"
                alt="Barber tools and precision cutting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-24 bg-card">
        <div className="container px-4 sm:px-8 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">Trusted by Egham</h2>
            <p className="text-muted-foreground text-lg">Real reviews from our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-background border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-8 pt-8 space-y-6 flex flex-col h-full justify-between">
                  <div className="flex gap-1 text-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <div className="font-heading font-bold text-white pt-4 border-t border-border/60">
                    — {review.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
