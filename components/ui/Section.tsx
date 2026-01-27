"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "default" | "dark" | "glass" | "none";
    orb?: boolean;
}

const Section = ({
    className,
    children,
    container = true,
    background = "default",
    orb = false,
    ...props
}: SectionProps) => {
    const backgrounds = {
        default: "bg-dark-bg",
        dark: "bg-dark-surface",
        glass: "glass",
        none: "bg-transparent",
    };

    return (
        <section
            className={cn(
                "py-20 md:py-32 relative overflow-hidden",
                backgrounds[background],
                className
            )}
            {...props}
        >
            {/* Background Gradient Orbs (Optional) */}
            {orb && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            )}

            {container ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export { Section };
