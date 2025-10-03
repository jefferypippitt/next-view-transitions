import { BrowserSupport } from "@/components/browser-support";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="py-8 space-y-6">
      <BrowserSupport />
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Next.js View Transitions Demo
        </h1>
        <Navigation />
      </div>
    </div>
  );
}
