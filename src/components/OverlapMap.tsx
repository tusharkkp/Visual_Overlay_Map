import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Item } from '../types';

interface OverlapMapProps {
  userItems: Item[];
  friendItems: Item[];
  overlappingItems: Item[];
  onItemClick: (item: Item) => void;
}

interface ItemNode {
  item: Item;
  x: number;
  y: number;
  size: number;
  color: string;
  type: 'user' | 'friend' | 'overlap';
  vx: number;
  vy: number;
}

const OverlapMap: React.FC<OverlapMapProps> = ({ 
  userItems, 
  friendItems, 
  overlappingItems, 
  onItemClick 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [tooltipInfo, setTooltipInfo] = useState<{ item: Item, x: number, y: number } | null>(null);
  const [nodes, setNodes] = useState<ItemNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<ItemNode | null>(null);
  const [isReady, setIsReady] = useState(false);
  const { isDark } = useTheme();
  
  const userColor = isDark ? 'rgba(139, 92, 246, 0.8)' : 'rgba(124, 58, 237, 0.8)'; // Purple
  const friendColor = isDark ? 'rgba(20, 184, 166, 0.8)' : 'rgba(13, 148, 136, 0.8)'; // Teal
  const overlapColor = isDark ? 'rgba(236, 72, 153, 0.8)' : 'rgba(219, 39, 119, 0.8)'; // Pink
  
  // Setup canvas and nodes
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Animation cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  // Update nodes when items change
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const width = canvas.width;
    const height = canvas.height;
    
    // To avoid duplicates, remove overlapping items from the user and friend arrays
    const uniqueUserItems = userItems.filter(
      userItem => !overlappingItems.some(overlap => overlap.id === userItem.id)
    );
    
    const uniqueFriendItems = friendItems.filter(
      friendItem => !overlappingItems.some(overlap => overlap.id === friendItem.id)
    );
    
    // Create nodes for each group
    const userNodes = uniqueUserItems.map(item => ({
      item,
      x: width * 0.3 + (Math.random() - 0.5) * 150,
      y: height * 0.5 + (Math.random() - 0.5) * 150,
      size: 20 + Math.random() * 10,
      color: userColor,
      type: 'user' as const,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25
    }));
    
    const friendNodes = uniqueFriendItems.map(item => ({
      item,
      x: width * 0.7 + (Math.random() - 0.5) * 150, 
      y: height * 0.5 + (Math.random() - 0.5) * 150,
      size: 20 + Math.random() * 10,
      color: friendColor,
      type: 'friend' as const,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25
    }));
    
    const overlapNodes = overlappingItems.map(item => ({
      item,
      x: width * 0.5 + (Math.random() - 0.5) * 100,
      y: height * 0.5 + (Math.random() - 0.5) * 100,
      size: 25 + Math.random() * 15, // Make overlapping items slightly larger
      color: overlapColor,
      type: 'overlap' as const,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25
    }));
    
    // Combine all nodes
    const allNodes = [...userNodes, ...friendNodes, ...overlapNodes];
    setNodes(allNodes);
    
    // Small delay to prevent animation artifacts
    setTimeout(() => setIsReady(true), 100);
  }, [userItems, friendItems, overlappingItems, userColor, friendColor, overlapColor]);
  
  // Draw animation
  useEffect(() => {
    if (!canvasRef.current || !isReady) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Target positions
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const userCenterX = width * 0.3;
    const friendCenterX = width * 0.7;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections between similar nodes (optional)
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      
      // Connect overlap nodes
      const overlapNodes = nodes.filter(node => node.type === 'overlap');
      for (let i = 0; i < overlapNodes.length; i++) {
        for (let j = i + 1; j < overlapNodes.length; j++) {
          ctx.beginPath();
          ctx.moveTo(overlapNodes[i].x, overlapNodes[i].y);
          ctx.lineTo(overlapNodes[j].x, overlapNodes[j].y);
          ctx.stroke();
        }
      }
      
      ctx.globalAlpha = 1;
      
      // Update & draw nodes
      for (const node of nodes) {
        // Apply forces toward target position
        let targetX = node.x;
        let targetY = node.y;
        
        if (node.type === 'user') {
          targetX = userCenterX + (Math.random() - 0.5) * 150;
        } else if (node.type === 'friend') {
          targetX = friendCenterX + (Math.random() - 0.5) * 150;
        } else if (node.type === 'overlap') {
          targetX = centerX + (Math.random() - 0.5) * 100;
        }
        
        // Move toward target with damping
        node.vx = (node.vx * 0.9) + (targetX - node.x) * 0.01;
        node.vy = (node.vy * 0.9) + (targetY - node.y) * 0.01;
        
        // Add some random movement
        node.vx += (Math.random() - 0.5) * 0.1;
        node.vy += (Math.random() - 0.5) * 0.1;
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Ensure nodes stay within bounds
        if (node.x < node.size) node.x = node.size;
        if (node.x > width - node.size) node.x = width - node.size;
        if (node.y < node.size) node.y = node.size;
        if (node.y > height - node.size) node.y = height - node.size;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        
        // Fill with color
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add glow effect (more intense for hovered node)
        if (hoveredNode === node) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 15;
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        
        // Add item title
        ctx.fillStyle = isDark ? '#E5E7EB' : '#1F2937';
        ctx.font = '12px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Truncate long titles
        let title = node.item.title;
        if (title.length > 12) {
          title = title.substring(0, 10) + '...';
        }
        
        ctx.fillText(title, node.x, node.y);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [nodes, hoveredNode, isDark, isReady]);
  
  // Mouse interactions
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if mouse is over any node
    let hoveredNode: ItemNode | null = null;
    for (const node of nodes) {
      const dx = node.x - x;
      const dy = node.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < node.size) {
        hoveredNode = node;
        break;
      }
    }
    
    setHoveredNode(hoveredNode);
    
    if (hoveredNode) {
      setTooltipInfo({
        item: hoveredNode.item,
        x: e.clientX,
        y: e.clientY
      });
    } else {
      setTooltipInfo(null);
    }
  };
  
  const handleMouseLeave = () => {
    setTooltipInfo(null);
    setHoveredNode(null);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (hoveredNode) {
      onItemClick(hoveredNode.item);
    }
  };
  
  return (
    <div ref={containerRef} className="w-full relative h-[500px] md:h-[600px] rounded-xl overflow-hidden">
      <div className={`absolute inset-0 z-0 ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-xl shadow-lg`}></div>
      
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
      
      {tooltipInfo && (
        <div 
          className={`absolute z-20 ${isDark ? 'bg-gray-800' : 'bg-white'} p-3 rounded-md shadow-lg transition-opacity`}
          style={{
            left: `${tooltipInfo.x}px`,
            top: `${tooltipInfo.y - 70}px`,
            transform: 'translate(-50%, -100%)',
            maxWidth: '200px'
          }}
        >
          <div className="text-sm font-semibold">{tooltipInfo.item.title}</div>
          <div className="text-xs opacity-70">
            Category: {tooltipInfo.item.category}
          </div>
          <div className="text-xs mt-1">Click for details</div>
        </div>
      )}
      
      <div className="absolute z-20 bottom-4 left-4 flex gap-4 text-xs">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-purple-500 inline-block mr-1"></span>
          <span>You</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-teal-500 inline-block mr-1"></span>
          <span>Friend</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-pink-500 inline-block mr-1"></span>
          <span>Shared</span>
        </div>
      </div>
    </div>
  );
};

export default OverlapMap;