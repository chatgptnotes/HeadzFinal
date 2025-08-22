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

    // Image URLs for the squares
    const imageUrls = [
      '/hero-section_images/hair_01_same.jpg',
      '/hero-section_images/hair_02_same.jpg',
      '/hero-section_images/hair_03_same.jpg',
      '/hero-section_images/hair_04_same.jpg',
      '/hero-section_images/hair_05_same.jpg',
      '/hero-section_images/hair_06_same.jpg',
      '/hero-section_images/hair_07_same.jpg',
      // Fallback images in case hero images don't load
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    ];

    // Load images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          startAnimation();
        }
      };
      img.src = url;
      images.push(img);
    });

    // Square properties
    const squares: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
      imageIndex: number;
    }> = [];

    // Create squares
    for (let i = 0; i < 12; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 120 + 80, // Increased size range: 80-200px
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        imageIndex: Math.floor(Math.random() * images.length),
      });
    }

    const startAnimation = () => {
      // Animation loop
      const animate = () => {
        // Clear canvas
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw squares
        squares.forEach((square) => {
          // Update position
          square.x += square.vx;
          square.y += square.vy;

          // Update rotation (360 degrees)
          square.rotation += square.rotationSpeed;

          // Bounce off walls with padding
          const padding = 50;
          if (square.x - square.size/2 < padding || square.x + square.size/2 > canvas.width - padding) {
            square.vx *= -1;
          }
          if (square.y - square.size/2 < padding || square.y + square.size/2 > canvas.height - padding) {
            square.vy *= -1;
          }

          // Save context
          ctx.save();
          
          // Move to square center and rotate
          ctx.translate(square.x, square.y);
          ctx.rotate(square.rotation);

          // Draw square background with glow
          const gradient = ctx.createRadialGradient(
            0, 0, 0,
            0, 0, Math.max(square.size/2, 1) // Ensure radius is always positive
          );
          gradient.addColorStop(0, square.color);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          
          // Draw rounded rectangle background
          ctx.beginPath();
          ctx.roundRect(-square.size/2, -square.size/2, square.size, square.size, 15);
          ctx.fill();

          // Draw rounded rectangle border
          ctx.strokeStyle = square.color;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(-square.size/2, -square.size/2, square.size, square.size, 15);
          ctx.stroke();

          // Draw image inside square
          const img = images[square.imageIndex];
          if (img) {
            const imageSize = square.size * 0.8; // Image takes 80% of square size
            const imageX = -imageSize/2;
            const imageY = -imageSize/2;
            
            // Create rounded corners for image
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(imageX, imageY, imageSize, imageSize, 10);
            ctx.clip();
            
            ctx.drawImage(img, imageX, imageY, imageSize, imageSize);
            ctx.restore();
          }

          // Restore context
          ctx.restore();
        });

        requestAnimationFrame(animate);
      };

      animate();
    };

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
