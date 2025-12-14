"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps {
  type?: "single";
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({
  type = "single",
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const [value, setValue] = React.useState<string | null>(defaultValue || null);

  return (
    <AccordionContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div className={cn("border-b border-dirtydog-silver/20", className)}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be inside Accordion");

  const isOpen = context.value !== null;

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(isOpen ? null : "subscription")}
      className={cn(
        "flex w-full items-center justify-between py-3 text-sm font-medium text-dirtydog-silver transition-all hover:text-dirtydog-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded",
        className
      )}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-dirtydog-green transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be inside Accordion");

  const isOpen = context.value !== null;

  if (!isOpen) return null;

  return (
    <div className={cn("pb-4 pt-0 transition-opacity duration-200", className)}>
      {children}
    </div>
  );
}
