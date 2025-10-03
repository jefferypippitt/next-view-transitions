import { BackButton } from "@/components/back-button";

export default function DemoFourPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-four-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Carousel Slide</h1>
        <p className="text-muted-foreground">
          This page demonstrates a 3D carousel slide transition. Content slides
          while rotating in 3D space for a dynamic carousel effect.
        </p>
      </div>
    </div>
  );
}
