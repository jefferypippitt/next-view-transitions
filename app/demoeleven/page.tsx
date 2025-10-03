import { BackButton } from "@/components/back-button";

export default function DemoElevenPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-eleven-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Liquid Morph</h1>
        <p className="text-muted-foreground">
          This page demonstrates a liquid morphing transition. Content appears
          to melt and flow like liquid, with organic warping and distortion
          creating a fluid, mesmerizing effect.
        </p>
      </div>
    </div>
  );
}
