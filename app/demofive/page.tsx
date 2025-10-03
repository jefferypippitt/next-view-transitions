import { BackButton } from "@/components/back-button";

export default function DemoFivePage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-five-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Zoom Blur</h1>
        <p className="text-muted-foreground">
          This page demonstrates a zoom blur transition effect. Content zooms
          in/out with a progressive blur for a dynamic depth effect.
        </p>
      </div>
    </div>
  );
}
