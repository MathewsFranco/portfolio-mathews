import GradientBlinds from "@/components/GradientBlinds";

export function AnimatedBackground() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "absolute" }}>
      <GradientBlinds
        gradientColors={["#1a3c2a", "#004221"]}
        angle={-120}
        noise={0.6}
        blindCount={50}
        blindMinWidth={50}
        mouseDampening={0.35}
        mirrorGradient
        spotlightRadius={0.5}
        spotlightSoftness={1}
        spotlightOpacity={0.4}
        distortAmount={1}
        shineDirection="right"
      />
    </div>
  );
}
