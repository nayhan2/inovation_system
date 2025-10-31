// src/components/shared/ParticleNetworkBackground.tsx (ENHANCED VERSION)

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
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;

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
    // Efek pulsating untuk partikel
    this.opacity = Math.random() * 0.5 + 0.3;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  draw() {
    if (!this.ctx) return;
    
    // Efek pulsating opacity
    this.pulsePhase += this.pulseSpeed;
    const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.2;
    
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    
    // Gradient fill untuk efek glow
    const gradient = this.ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size * 2
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${pulseOpacity})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
    
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  update() {
    if (!this.canvas) return;
    
    // Reset partikel saat keluar layar atas
    if (this.y < -this.size) {
      this.y = this.canvas.height + this.size;
      this.x = Math.random() * this.canvas.width;
    }

    // Mantul di sisi kiri dan kanan
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    // Interaksi mouse dengan efek lebih smooth
    if (this.mouse.x !== null && this.mouse.y !== null) {
      const dx = this.mouse.x - this.x;
      const dy = this.mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.mouse.radius + this.size) {
        const force = (this.mouse.radius - distance) / this.mouse.radius;
        const angle = Math.atan2(dy, dx);
        
        this.x -= Math.cos(angle) * force * 2;
        this.y -= Math.sin(angle) * force * 2;
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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId = 0;
    let isResizing = false;
    const particleColor = 'rgba(255, 255, 255, 0.5)';
    const mouse = {
        x: null as number | null,
        y: null as number | null,
        radius: 150 // Radius interaksi lebih besar
    };
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let particlesArray: Particle[] = [];

    function init() {
      if (!canvas) return;
      particlesArray = [];
      
      // PENINGKATAN JUMLAH PARTIKEL - Lebih banyak dari sebelumnya
      let numberOfParticles = (canvas.height * canvas.width) / 5000; // Dari 9000 ke 5000
      if (numberOfParticles > 200) numberOfParticles = 150; // Maksimal 200 (dari 100)

      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2.5) + 0.5; // Variasi ukuran lebih besar
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const directionX = (Math.random() * 0.6) - 0.3; // Gerakan horizontal lebih dinamis
        const directionY = (Math.random() * -0.4) - 0.1; // Gerakan vertikal lebih cepat

        particlesArray.push(new Particle(x, y, directionX, directionY, size, ctx!, canvas, mouse, particleColor));
      }
    }

    function connect() {
      if (!ctx) return;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const pa = particlesArray[a];
          const pb = particlesArray[b];
          if (!pa || !pb) continue;
          
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Jarak koneksi lebih jauh untuk efek network yang lebih luas
          if (distance < 180) {
            const opacityValue = 1 - (distance / 180);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.25})`;
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
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full"
    />
  );
}