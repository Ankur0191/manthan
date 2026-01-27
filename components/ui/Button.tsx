"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    href?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, href, variant = "primary", size = "md", fullWidth, children, ...props }, ref) => {

        const variants = {
            primary: "bg-gradient-to-r from-primary-yellow to-yellow-500 text-dark-bg hover:shadow-[0_0_20px_rgba(236,178,92,0.6)] border border-transparent",
            secondary: "bg-transparent border border-primary-blue text-primary-blue hover:bg-primary-blue/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
            accent: "bg-accent-red text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,60,0.5)] border border-transparent",
            outline: "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
            ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-xs uppercase tracking-wider",
            md: "px-6 py-3 text-sm uppercase tracking-wider",
            lg: "px-8 py-4 text-base font-bold uppercase tracking-widest",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
            variants[variant],
            sizes[size],
            fullWidth && "w-full",
            className
        );

        const animationProps = {
            whileHover: { scale: 1.02, y: -2 },
            whileTap: { scale: 0.98 },
            transition: { type: "spring", stiffness: 400, damping: 17 }
        };

        if (href) {
            return (
                <Link href={href} className={fullWidth ? "w-full" : ""}>
                    <motion.button
                        {...animationProps}
                        className={classes}
                        {...(props as any)}
                    >
                        {children}
                        {/* Gloss Effect Line */}
                        {variant === 'primary' && (
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full" />
                        )}
                    </motion.button>
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                {...animationProps}
                className={classes}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
