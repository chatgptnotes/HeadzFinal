'use client';

import React, { useEffect, useRef } from 'react';

const SphereGallery: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Sphere properties
    const spheres: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    // Create spheres
    for (let i = 0; i < 15; i++) {
      spheres.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 50 + 20,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw spheres
      spheres.forEach((sphere) => {
        // Update position
        sphere.x += sphere.vx;
        sphere.y += sphere.vy;

        // Bounce off walls
        if (sphere.x - sphere.radius < 0 || sphere.x + sphere.radius > canvas.width) {
          sphere.vx *= -1;
        }
        if (sphere.y - sphere.radius < 0 || sphere.y + sphere.radius > canvas.height) {
          sphere.vy *= -1;
        }

        // Draw sphere
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
        ctx.fillStyle = sphere.color;
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          sphere.x, sphere.y, 0,
          sphere.x, sphere.y, sphere.radius
        );
        gradient.addColorStop(0, sphere.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
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
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    />
  );
};

export default SphereGallery;
