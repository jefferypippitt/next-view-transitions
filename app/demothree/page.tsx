import { BackButton } from "@/components/back-button";

export default function DemoThreePage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-three-transition" />

        <h1 className="text-4xl font-bold tracking-tight">3D Bounce Flip</h1>
        <p className="text-muted-foreground">
          This page demonstrates a bouncy 3D flip transition. Content flips in
          3D space with a playful bouncing effect.
        </p>
      </div>
    </div>
  );
}
