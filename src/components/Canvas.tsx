import React, { useEffect, useRef } from 'react';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {

    const canvas = canvasRef.current;

    if (!canvas) return

    const ctx = canvas.getContext("2d");;

    if (!ctx) return;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    //Draw a Rectangle

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 100, 100);
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      {/* A simple fixed canvas with a visible border so you see exactly what you are doing */}
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        width={800}
        height={500}
        style={{ backgroundColor: '#242424', borderRadius: '8px', border: '1px solid #444' }}
      />
    </div>
  );
};

// Tomorrow's Context: Mastered static primitives (fillRect, strokeRect, line, arc).
// Next up: Add an onClick handler to draw a rectangle wherever you click with your mouse.
