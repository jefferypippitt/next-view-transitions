import { BackButton } from "@/components/back-button";

export default function DemoSevenPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-seven-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Slide & Fade</h1>
        <p className="text-muted-foreground">
          This page demonstrates a smooth slide and fade transition. Content
          elegantly slides from the corners while fading in/out for a subtle and
          polished effect.
        </p>
      </div>
    </div>
  );
}
