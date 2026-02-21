"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-8 flex h-20 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-heading font-bold text-2xl tracking-tight text-primary">
                            GK&apos;s Barbers
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-primary text-foreground/80"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="tel:01784557002">Call to Book</Link>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-foreground">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle mobile menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] bg-card border-border">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-6 mt-8">
                            <Link
                                href="/"
                                className="font-heading font-bold text-2xl text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                GK&apos;s Barbers
                            </Link>
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                                    <Link href="tel:01784557002">Call to Book</Link>
                                </Button>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
