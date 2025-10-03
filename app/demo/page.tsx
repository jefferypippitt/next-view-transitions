import { BackButton } from "@/components/back-button";

export default function DemoPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Rotate & Scale</h1>
        <p className="text-muted-foreground">
          This page demonstrates a dramatic rotation and scale transition.
          Content spins 180 degrees while scaling down/up for a dynamic effect.
        </p>
      </div>
    </div>
  );
}
