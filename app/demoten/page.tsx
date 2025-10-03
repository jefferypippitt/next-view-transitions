import { BackButton } from "@/components/back-button";

export default function DemoTenPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <BackButton transitionClass="demo-ten-transition" />

        <h1 className="text-4xl font-bold tracking-tight">Wave Ripple</h1>
        <p className="text-muted-foreground">
          This page demonstrates a wave ripple transition. Content expands
          outward like ripples on water, with a progressive blur creating a
          fluid and organic effect.
        </p>
      </div>
    </div>
  );
}
