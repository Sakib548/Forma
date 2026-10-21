import React, { useEffect, useRef } from "react";

// interface CanvasProps {
//   activeTool?: string;
/// }

// export const Canvas: React.FC<CanvasProps> = ({ activeTool = "select" }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;;

//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;

//     const rect = canvas.getBoundingClientRect();

//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;

//     ctx.scale(dpr, dpr);

//     ctx.fillStyle = "red";
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

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    //Draw a RECtangle

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 100);

    //Draw an outline
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.strokeRect(250, 50, 100, 100);

    //Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 220);
    ctx.lineTo(400, 220);
    ctx.stroke();

    //Draw a circle

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(100, 320, 40, 0, Math.PI * 2);
    ctx.fill();
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{
          backgroundColor: "#242424",
          borderRadius: "8px",
          border: "1px solid #444",
        }}
      />
    </div>
  );
};
