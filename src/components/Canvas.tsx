import React, { useEffect, useRef } from 'react';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Get the paintbrush
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- LESSON 1: DRAW A RECTANGLE ---
    ctx.fillStyle = '#0d99ff'; // Pick blue color
    ctx.fillRect(50, 50, 150, 100); // (X: 50, Y: 50, Width: 150, Height: 100)

    // --- LESSON 2: DRAW AN OUTLINE ONLY ---
    ctx.strokeStyle = '#ffffff'; // Pick white outline
    ctx.lineWidth = 3;           // Line thickness
    ctx.strokeRect(250, 50, 150, 100);

    // --- LESSON 3: DRAW A LINE ---
    ctx.beginPath();             // Lift pen & start a new path
    ctx.moveTo(50, 220);         // Put pen down at (50, 220)
    ctx.lineTo(400, 220);        // Drag pen to (400, 220)
    ctx.stroke();                // Paint the line

    // --- LESSON 4: DRAW A CIRCLE ---
    ctx.beginPath();
    ctx.fillStyle = '#ff4d4f';   // Red color
    ctx.arc(100, 320, 40, 0, Math.PI * 2); // (X: 100, Y: 320, Radius: 40, 0 to 360°)
    ctx.fill();                  // Fill the circle
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      {/* A simple fixed canvas with a visible border so you see exactly what you are doing */}
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        style={{ backgroundColor: '#242424', borderRadius: '8px', border: '1px solid #444' }}
      />
    </div>
  );
};

// Tomorrow's Context: Mastered static primitives (fillRect, strokeRect, line, arc).
// Next up: Add an onClick handler to draw a rectangle wherever you click with your mouse.
