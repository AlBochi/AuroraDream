import { useEffect, useRef } from "react";

export default function AuroraSky() {
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

    const drawAurora = () => {
      const { width, height } = canvas;
      
      // Dark night sky background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0A0E17"); // Dark blue-black at top
      gradient.addColorStop(1, "#0A3A57"); // Deep blue at bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // EVEN SLOWER AURORA - Reduced all speeds by ~60%
      const layers = [
        { 
          color: "rgba(0, 255, 136, 0.2)", // Emerald green
          speed: 0.000006, // SLOWER (was 0.000015)
          amplitude: 60, 
          yOffset: 0.2,
          frequency: 0.001
        },
        { 
          color: "rgba(128, 0, 255, 0.15)", // Purple
          speed: 0.000005, // SLOWER (was 0.000012)
          amplitude: 80, 
          yOffset: 0.25,
          frequency: 0.0008
        },
        { 
          color: "rgba(0, 200, 255, 0.12)", // Cyan
          speed: 0.000008, // SLOWER (was 0.00002)
          amplitude: 100, 
          yOffset: 0.3,
          frequency: 0.0012
        },
        { 
          color: "rgba(255, 100, 200, 0.1)", // Pink
          speed: 0.000004, // SLOWER (was 0.00001)
          amplitude: 70, 
          yOffset: 0.35,
          frequency: 0.0009
        },
        { 
          color: "rgba(100, 220, 255, 0.08)", // Light blue
          speed: 0.000007, // SLOWER (was 0.000018)
          amplitude: 90, 
          yOffset: 0.4,
          frequency: 0.0011
        }
      ];

      // Draw aurora layers
      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        
        // Create smoother, flowing curves
        for (let x = 0; x <= width; x += 2) {
          // Multiple sine waves for organic movement
          const wave1 = Math.sin((x * layer.frequency) + (time * layer.speed * 300)) * layer.amplitude;
          const wave2 = Math.sin((x * layer.frequency * 1.7) + (time * layer.speed * 500)) * (layer.amplitude * 0.6);
          const wave3 = Math.cos((x * layer.frequency * 0.8) + (time * layer.speed * 200)) * (layer.amplitude * 0.3);
          
          // Very subtle randomness
          const randomOffset = Math.sin(x * 0.0003 + time * 0.00005) * 3;
          const y = (height * layer.yOffset) + wave1 + wave2 + wave3 + randomOffset;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Create aurora gradient
        const auroraGradient = ctx.createLinearGradient(0, height * 0.1, 0, height * 0.6);
        auroraGradient.addColorStop(0, layer.color);
        auroraGradient.addColorStop(0.3, layer.color.replace(/[\d.]+\)$/, "0.08)"));
        auroraGradient.addColorStop(0.7, layer.color.replace(/[\d.]+\)$/, "0.02)"));
        auroraGradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = auroraGradient;
        ctx.fill();
        
        // Add soft glow
        ctx.filter = "blur(20px)";
        ctx.fillStyle = layer.color.replace(/[\d.]+\)$/, "0.1)");
        ctx.fill();
        ctx.filter = "none";
      });

      // Very subtle stars (barely twinkling)
      for (let i = 0; i < 25; i++) {
        const starX = (Math.sin(i * 137.3) * 0.5 + 0.5) * width;
        const starY = (Math.cos(i * 203.7) * 0.5 + 0.5) * height * 0.7;
        const twinkle = Math.sin(time * 0.0001 + i * 2) * 0.3 + 0.7; // Very slow twinkle
        const size = 0.5 + twinkle * 0.8; // Smaller stars
        
        ctx.beginPath();
        ctx.arc(starX, starY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 220, ${0.15 + twinkle * 0.2})`;
        ctx.fill();
        
        // Rare shooting stars (almost never)
        if (Math.random() < 0.0001) {
          ctx.beginPath();
          ctx.moveTo(starX, starY);
          ctx.lineTo(starX + 30, starY - 15);
          ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      time += 16;
      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      data-testid="canvas-aurora-sky"
    />
  );
}