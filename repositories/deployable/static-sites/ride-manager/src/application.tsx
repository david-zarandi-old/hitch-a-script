import { createSignal, createEffect } from "solid-js";
import { LayoutFactory, generateRivers, generateRoads, generateBuildings, generateParks } from "@shared/map-layout-library";

const SCALE = 8;

export default function Application() {
  let canvas: HTMLCanvasElement;
  const layoutFactory = LayoutFactory(generateRivers, generateBuildings, generateRoads, generateParks);
  const [seed, setSeed] = createSignal(1);

  createEffect(() => {
    if (!canvas) return; // Canvas not mounted yet.
    const context = canvas.getContext("2d");
    if (context) {
      // Clear the canvas before re-drawing.
      context.clearRect(0, 0, canvas.width, canvas.height);

      const layout = layoutFactory(100, 100, seed())

      layout.rivers.forEach(({ x, y }) => {
        context.fillStyle = "blue";
        context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
      });

      layout.buildings.forEach(({ x, y }) => {
        context.fillStyle = "red";
        context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
      });

      layout.roads.forEach(({ x, y }) => {
        context.fillStyle = "black";
        context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
      });

      layout.buildings.forEach(({ x, y }) => {
        context.fillStyle = "green";
        context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
      });
    }
  });

  return (
    <>
      <canvas ref={canvas} width="808" height="808" />
      <input type="number" onInput={(e) => setSeed(Number(e.target.value))} />
    </>
  );
}