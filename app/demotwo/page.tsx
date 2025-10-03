import { BackButton } from "@/components/back-button";

export default function DemoTwoPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-two-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Diagonal Split</h1>
        <p className="text-muted-foreground">
          This page demonstrates a diagonal split transition effect. Content
          reveals and hides through a diagonal wipe animation.
        </p>
      </div>
    </div>
  );
}
