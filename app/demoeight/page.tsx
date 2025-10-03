import { BackButton } from "@/components/back-button";

export default function DemoEightPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-eight-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Elastic Stretch</h1>
        <p className="text-muted-foreground">
          This page demonstrates an elastic stretch transition. Content
          stretches horizontally with a bouncy elastic effect, creating a
          playful and dynamic animation.
        </p>
      </div>
    </div>
  );
}
