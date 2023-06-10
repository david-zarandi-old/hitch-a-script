import { Layout, LayoutElementGenerator } from './types';
import { RandomGeneratorFactory } from "@shared/rng-library";

export function LayoutFactory(
  generateRivers: LayoutElementGenerator,
  generateBuildings: LayoutElementGenerator,
  generateRoads: LayoutElementGenerator,
  generateParks: LayoutElementGenerator,
) {
  return (rows: number, column: number, seed: number): Layout => {
    const randomGenerator = RandomGeneratorFactory(seed);

    let layout: Layout = { roads: [], rivers: [], buildings: [], parks: [] };

    layout.rivers = generateRivers(rows, column, layout, randomGenerator);
    layout.buildings = generateBuildings(rows, column, layout, randomGenerator);
    layout.roads = generateRoads(rows, column, layout, randomGenerator);
    layout.parks = generateParks(rows, column, layout, randomGenerator);

    return layout;
  }
}
