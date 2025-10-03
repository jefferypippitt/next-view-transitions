"use client";

import { Link } from "next-view-transitions";

const navigationItems = [
  {
    href: "/demo",
    label: "Rotate & Scale Demo",
    transition: "demo-transition",
  },
  {
    href: "/demotwo",
    label: "Diagonal Split Demo",
    transition: "demo-two-transition",
  },
  {
    href: "/demothree",
    label: "3D Bounce Flip Demo",
    transition: "demo-three-transition",
  },
  {
    href: "/demofour",
    label: "Carousel Slide Demo",
    transition: "demo-four-transition",
  },
  {
    href: "/demofive",
    label: "Zoom Blur Demo",
    transition: "demo-five-transition",
  },
  {
    href: "/demosix",
    label: "Spiral Zoom Demo",
    transition: "demo-six-transition",
  },
  {
    href: "/demoseven",
    label: "Slide & Fade Demo",
    transition: "demo-seven-transition",
  },
  {
    href: "/demoeight",
    label: "Elastic Stretch Demo",
    transition: "demo-eight-transition",
  },
  {
    href: "/demonine",
    label: "Flip Vertical Demo",
    transition: "demo-nine-transition",
  },
  {
    href: "/demoten",
    label: "Wave Ripple Demo",
    transition: "demo-ten-transition",
  },
  {
    href: "/demoeleven",
    label: "Liquid Morph Demo",
    transition: "demo-eleven-transition",
  },
];

export function Navigation() {
  const handleTransitionClick = (transitionClass: string) => {
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
    <nav className="flex flex-col w-full space-y-2">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => handleTransitionClick(item.transition)}
          className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
