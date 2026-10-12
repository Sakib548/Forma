// import React, { useEffect, useRef } from "react";

// interface CanvasProps {
//   activeTool?: string;
// }

// export const Canvas: React.FC<CanvasProps> = ({ activeTool = "select" }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Handle high-DPI (Retina) displays
//     const dpr = window.devicePixelRatio || 1;
//     const rect = canvas.getBoundingClientRect();

//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
//     ctx.scale(dpr, dpr);

//     // Initial canvas backdrop
//     ctx.fillStyle = "#491e1e";
//     ctx.fillRect(0, 0, rect.width, rect.height);
//   }, []);

//   return (
//     <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "block",
//           cursor: activeTool === "select" ? "default" : "crosshair",
//         }}
//       />
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";

interface CanvasProps {
  activeTool?: string;
}

export const Canvas: React.FC<CanvasProps> = ({ activeTool = "select" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);

  return (
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: activeTool === "select" ? "default" : "crosshair",
        }}
      />
    </div>
  );
};
