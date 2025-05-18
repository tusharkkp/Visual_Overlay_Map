import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

const LandingHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Animation variables
    const userColor = isDark ? '#8B5CF6' : '#7C3AED'; // Purple
    const friendColor = isDark ? '#14B8A6' : '#0D9488'; // Teal
    const overlapColor = isDark ? '#EC4899' : '#DB2777'; // Pink
    
    let animationFrame: number;
    let phase = 0;
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center position
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 0.65; // Moved further down
      
      // Calculate positions based on animation phase (0 to 1)
      const radius = Math.min(canvas.width, canvas.height) * 0.15;
      
      // Phase controls the animation
      phase += 0.005;
      if (phase > 1) phase = 1; // Stop at final position
      
      // Calculate positions
      const userX = centerX - radius * (1 - phase) * 1.5;
      const userY = centerY;
      
      const friendX = centerX + radius * (1 - phase) * 1.5;
      const friendY = centerY;
      
      // Draw user sphere
      ctx.beginPath();
      ctx.arc(userX, userY, radius, 0, Math.PI * 2);
      ctx.fillStyle = userColor;
      ctx.globalAlpha = 0.7;
      ctx.fill();
      
      // Glow effect
      const gradientUser = ctx.createRadialGradient(
        userX, userY, radius * 0.5,
        userX, userY, radius * 1.5
      );
      gradientUser.addColorStop(0, userColor + '40');
      gradientUser.addColorStop(1, userColor + '00');
      
      ctx.beginPath();
      ctx.arc(userX, userY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradientUser;
      ctx.globalAlpha = 0.3;
      ctx.fill();
      
      // Draw friend sphere
      ctx.beginPath();
      ctx.arc(friendX, friendY, radius, 0, Math.PI * 2);
      ctx.fillStyle = friendColor;
      ctx.globalAlpha = 0.7;
      ctx.fill();
      
      // Glow effect
      const gradientFriend = ctx.createRadialGradient(
        friendX, friendY, radius * 0.5,
        friendX, friendY, radius * 1.5
      );
      gradientFriend.addColorStop(0, friendColor + '40');
      gradientFriend.addColorStop(1, friendColor + '00');
      
      ctx.beginPath();
      ctx.arc(friendX, friendY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradientFriend;
      ctx.globalAlpha = 0.3;
      ctx.fill();
      
      // Draw overlap area if spheres are close enough
      if (phase > 0.5) {
        const overlapPhase = (phase - 0.5) * 2;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.7 * overlapPhase, 0, Math.PI * 2);
        ctx.fillStyle = overlapColor;
        ctx.globalAlpha = 0.7 * overlapPhase;
        ctx.fill();
        
        // Glow effect for overlap
        const gradientOverlap = ctx.createRadialGradient(
          centerX, centerY, radius * 0.3 * overlapPhase,
          centerX, centerY, radius * 1.2 * overlapPhase
        );
        gradientOverlap.addColorStop(0, overlapColor + '40');
        gradientOverlap.addColorStop(1, overlapColor + '00');
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 1.2 * overlapPhase, 0, Math.PI * 2);
        ctx.fillStyle = gradientOverlap;
        ctx.globalAlpha = 0.5 * overlapPhase;
        ctx.fill();
      }
      
      // Labels
      ctx.globalAlpha = 1;
      ctx.font = 'bold 16px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isDark ? '#E5E7EB' : '#1F2937';
      
      if (phase > 0.2) {
        const labelAlpha = Math.min(1, (phase - 0.2) * 5);
        ctx.globalAlpha = labelAlpha;
        
        ctx.fillText('You', userX, userY - radius - 20);
        ctx.fillText('Friend', friendX, friendY - radius - 20);
        
        if (phase > 0.7) {
          const overlapLabelAlpha = Math.min(1, (phase - 0.7) * 5);
          ctx.globalAlpha = overlapLabelAlpha;
          ctx.fillText('Shared', centerX, centerY);
        }
      }
      
      // Continue animation if not complete
      if (phase < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    // Start animation
    animationFrame = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDark]);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="z-10 text-center px-4 max-w-3xl mt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500">
            Visual Overlap Map
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          See what you and your friend both love
        </p>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 animate-bounce z-10"
        aria-label="Scroll down to explore"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

export default LandingHero;