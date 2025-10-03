import { BackButton } from "@/components/back-button";

export default function DemoSixPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-six-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Spiral Zoom</h1>
        <p className="text-muted-foreground">
          This page demonstrates a spiral zoom transition effect. Content
          spirals in a vortex pattern while zooming in/out for a dynamic
          hypnotic effect.
        </p>
      </div>
    </div>
  );
}
