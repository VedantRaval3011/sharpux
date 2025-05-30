
import React, { useEffect, useRef } from 'react';

const PinkGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Globe parameters
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    const dots: Array<{ x: number; y: number; z: number; originalY: number }> = [];

    // Create dots on sphere surface
    const createDots = () => {
      dots.length = 0;
      const dotCount = 800;
      
      for (let i = 0; i < dotCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / dotCount);
        const theta = Math.sqrt(dotCount * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        dots.push({
          x: x + centerX,
          y: y + centerY,
          z: z,
          originalY: y + centerY
        });
      }
    };

    createDots();

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      rotation += 0.005;

      dots.forEach((dot) => {
        // Rotate around Y axis
        const rotatedX = (dot.x - centerX) * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = (dot.x - centerX) * Math.sin(rotation) + dot.z * Math.cos(rotation);
        
        // Only show dots on the front half of the sphere
        if (rotatedZ > -radius * 0.3) {
          // Calculate size based on depth (z position)
          const scale = (rotatedZ + radius) / (2 * radius);
          const size = 1 + scale * 2;
          const opacity = 0.3 + scale * 0.7;
          
          ctx.fillStyle = `rgba(246, 9, 165, ${opacity})`;
          ctx.beginPath();
          ctx.arc(rotatedX + centerX, dot.originalY, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default PinkGlobe;