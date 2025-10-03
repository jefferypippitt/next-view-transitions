import { ModeToggle } from "@/components/mode-toggle";
import { BrowserSupport } from "@/components/browser-support";
import { Link } from "next-view-transitions";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex h-14 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BrowserSupport />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
