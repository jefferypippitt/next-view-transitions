"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  transitionClass: string;
}

export function BackButton({ transitionClass }: BackButtonProps) {
  const handleTransitionClick = () => {
    // Add transition class for custom animations
    document.documentElement.classList.add(transitionClass);

    // Clean up class when transition finishes using the View Transition API
    // This listens for the actual animation end, not a hardcoded timeout
    const cleanup = () => {
      document.documentElement.classList.remove(transitionClass);
    };

    // Remove class on animation end or after navigation
    document.addEventListener("transitionend", cleanup, { once: true });

    // Fallback cleanup in case transitionend doesn't fire
    setTimeout(cleanup, 2000);
  };

  return (
    <Link
      href="/"
      onClick={handleTransitionClick}
      className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back
    </Link>
  );
}
