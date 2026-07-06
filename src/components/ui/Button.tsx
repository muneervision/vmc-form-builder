import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "bg-teal-500 text-paper hover:bg-teal-600 shadow-sm",
        outline:
          "border border-ink/15 dark:border-white/15 text-ink dark:text-white hover:border-teal-500 hover:text-teal-500",
        ghost: "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white",
        glass: "glass-panel text-ink dark:text-white hover:bg-white/70 dark:hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={twMerge(clsx(buttonStyles({ variant, size }), className))} {...props} />
  );
}
