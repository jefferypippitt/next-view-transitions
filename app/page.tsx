import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="py-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Next.js View Transitions Demo
        </h1>
        <Navigation />
      </div>
    </div>
  );
}
