import { useEffect, useRef } from "react";

export default function SandBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const drawBackground = () => {
      const { width, height } = canvas;
      
      // 1. Solid soft sand background
      ctx.fillStyle = "#F3E8D0";
      ctx.fillRect(0, 0, width, height);

      // 2. Northern lights layers (same as AuroraSky but over sand)
      const layers = [
        { 
          color: "rgba(0, 255, 136, 0.15)", // Lighter, more transparent
          speed: 0.000015,
          amplitude: 60, 
          yOffset: 0.2,
          frequency: 0.001
        },
        { 
          color: "rgba(128, 0, 255, 0.1)", // Lighter
          speed: 0.000012,
          amplitude: 80, 
          yOffset: 0.25,
          frequency: 0.0008
        },
        { 
          color: "rgba(0, 200, 255, 0.08)", // Lighter
          speed: 0.00002,
          amplitude: 100, 
          yOffset: 0.3,
          frequency: 0.0012
        },
        { 
          color: "rgba(255, 100, 200, 0.06)", // Lighter
          speed: 0.00001,
          amplitude: 70, 
          yOffset: 0.35,
          frequency: 0.0009
        },
        { 
          color: "rgba(100, 220, 255, 0.05)", // Lighter
          speed: 0.000018,
          amplitude: 90, 
          yOffset: 0.4,
          frequency: 0.0011
        }
      ];

      // Draw aurora layers
      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        for (let x = 0; x <= width; x += 2) {
          const wave1 = Math.sin((x * layer.frequency) + (time * layer.speed * 300)) * layer.amplitude;
          const wave2 = Math.sin((x * layer.frequency * 1.7) + (time * layer.speed * 500)) * (layer.amplitude * 0.6);
          const wave3 = Math.cos((x * layer.frequency * 0.8) + (time * layer.speed * 200)) * (layer.amplitude * 0.3);
          const randomOffset = Math.sin(x * 0.0003 + time * 0.00005) * 3;
          const y = (height * layer.yOffset) + wave1 + wave2 + wave3 + randomOffset;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Create aurora gradient (more transparent over sand)
        const auroraGradient = ctx.createLinearGradient(0, height * 0.1, 0, height * 0.6);
        auroraGradient.addColorStop(0, layer.color);
        auroraGradient.addColorStop(0.3, layer.color.replace(/[\d.]+\)$/, "0.05)"));
        auroraGradient.addColorStop(0.7, layer.color.replace(/[\d.]+\)$/, "0.01)"));
        auroraGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = auroraGradient;
        ctx.fill();
      });

      time += 16;
      animationId = requestAnimationFrame(drawBackground);
    };

    drawBackground();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      data-testid="canvas-sand-background"
    />
  );
}