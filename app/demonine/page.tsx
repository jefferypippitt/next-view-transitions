import { BackButton } from "@/components/back-button";

export default function DemoNinePage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-nine-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Flip Vertical</h1>
        <p className="text-muted-foreground">
          This page demonstrates a vertical flip transition. Content flips like
          a card on its horizontal axis, creating a smooth 3D card-flip effect.
        </p>
      </div>
    </div>
  );
}
