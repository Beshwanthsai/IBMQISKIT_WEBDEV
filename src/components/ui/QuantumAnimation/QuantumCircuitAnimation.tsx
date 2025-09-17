import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface QuantumCircuitAnimationProps {
  className?: string;
}

const QuantumCircuitAnimation = ({ className = '' }: QuantumCircuitAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match the container
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // Quantum particle class
    class QuantumParticle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      phase: number;
      phaseSpeed: number;
      entangled: QuantumParticle | null = null;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(105, 41, 196, ${Math.random() * 0.5 + 0.3})`;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.phase = Math.random() * Math.PI * 2;
        this.phaseSpeed = (Math.random() * 0.02) + 0.01;
      }
      
      update() {
        this.phase += this.phaseSpeed;
        
        // Apply quantum "uncertainty" to velocity
        if (Math.random() < 0.05) {
          this.vx += (Math.random() - 0.5) * 0.2;
          this.vy += (Math.random() - 0.5) * 0.2;
        }
        
        this.x += this.vx;
        this.y += this.vy;
        
        // Boundary conditions
        if (canvas && (this.x < 0 || this.x > canvas.width)) this.vx *= -1;
        if (canvas && (this.y < 0 || this.y > canvas.height)) this.vy *= -1;
      }
      
      draw() {
        if (!ctx) return;
        
        // The radius "breathes" based on the phase
        const pulsatingRadius = this.radius * (1 + Math.sin(this.phase) * 0.3);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulsatingRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // If this particle is entangled with another, draw a line between them
        if (this.entangled) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.entangled.x, this.entangled.y);
          ctx.strokeStyle = `rgba(17, 146, 232, ${0.2 + Math.sin(this.phase) * 0.1})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    // Create quantum particles
    const numParticles = Math.floor(canvas.width * canvas.height / 10000);
    const particles: QuantumParticle[] = [];
    
    for (let i = 0; i < numParticles; i++) {
      particles.push(new QuantumParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }
    
    // Create entangled pairs
    for (let i = 0; i < numParticles / 2; i++) {
      const idx1 = Math.floor(Math.random() * particles.length);
      let idx2;
      do {
        idx2 = Math.floor(Math.random() * particles.length);
      } while (idx1 === idx2);
      
      particles[idx1].entangled = particles[idx2];
      particles[idx2].entangled = particles[idx1];
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines (quantum circuit representation)
      ctx.strokeStyle = 'rgba(200, 200, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      const lineSpacing = canvas.height / 8;
      for (let y = 0; y < canvas.height; y += lineSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <motion.div 
      className={`absolute inset-0 z-0 opacity-30 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  );
};

export default QuantumCircuitAnimation;