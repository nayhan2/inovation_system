// src/components/shared/ParticleNetworkBackground.tsx (VERSI PARTIKEL KE ATAS)

import React, { useRef, useEffect } from 'react';

type MouseState = { x: number | null; y: number | null; radius: number };

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  mouse: MouseState;
  color: string;

  constructor(
    x: number,
    y: number,
    directionX: number,
    directionY: number,
    size: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    mouse: MouseState,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.ctx = ctx;
    this.canvas = canvas;
    this.mouse = mouse;
    this.color = color;
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    if (!this.canvas) return;
    // --- PERUBAHAN #1: ATUR ULANG PARTIKEL SAAT KELUAR LAYAR ATAS ---
    // Jika partikel melewati batas atas, pindahkan ke bawah dengan posisi X acak.
    if (this.y < -this.size) {
      this.y = this.canvas.height + this.size;
      this.x = Math.random() * this.canvas.width;
    }

    // Biarkan partikel memantul di sisi kiri dan kanan
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    // Logika interaksi mouse tetap sama...
    if (this.mouse.x !== null && this.mouse.y !== null) {
      const dx = this.mouse.x - this.x;
      const dy = this.mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.mouse.radius + this.size) {
        if (this.mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
          this.x += 1;
        }
        if (this.mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 1;
        }
        if (this.mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
          this.y += 1;
        }
        if (this.mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 1;
        }
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

export function ParticleNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // ... (kode di dalam useEffect sebagian besar tetap sama)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // ... (kode lainnya tetap sama)
    let animationFrameId = 0;
    let isResizing = false;
    const particleColor = 'rgba(255, 255, 255, 0.5)';
    const mouse = {
        x: null as number | null,
        y: null as number | null,
        radius: 100 
    };
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let particlesArray: Particle[] = [];

    function init() {
      if (!canvas) return;
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      if (numberOfParticles > 100) numberOfParticles = 100;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 0.4) - 0.2;
        // --- PERUBAHAN #2: PASTIKAN SEMUA PARTIKEL BERGERAK KE ATAS ---
        // Nilai directionY akan selalu negatif (antara -0.1 dan -0.6)
        const directionY = (Math.random() * -0.5) - 0.1;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, ctx!, canvas, mouse, particleColor));
      }
    }

    // ... (sisa kode seperti `connect`, `animate`, `handleResize` tetap sama persis)
    function connect() {
        if (!ctx) return;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const pa = particlesArray[a];
                const pb = particlesArray[b];
                if (!pa || !pb) continue;
                const distance = ((pa.x - pb.x) * (pa.x - pb.x)) + ((pa.y - pb.y) * (pa.y - pb.y));
                if (distance < (150 * 150)) {
                    const opacityValue = 1 - (distance / (150 * 150));
                    const [r, g, b] = [255, 255, 255];
                    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacityValue * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                }
            }
        }
    }
    function animate() {
        if (isResizing) return; 
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            if(particlesArray[i]) {
                particlesArray[i].update();
            }
        }
        connect();
        animationFrameId = requestAnimationFrame(animate);
    }
    const handleResize = () => {
        if (!canvas || !ctx) return;
        isResizing = true; 
        cancelAnimationFrame(animationFrameId);
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
        init(); 
        isResizing = false; 
        animate();
    };
    
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full"
    />
  );
}