import type { RandomGenerator } from "@shared/rng-library";

export type Coordinate = {
  x: number;
  y: number;
}

export type Layout = {
  roads: Coordinate[];
  rivers: Coordinate[];
  buildings: Coordinate[];
  parks: Coordinate[];
};

export type LayoutElementGenerator = (
  rows: number,
  columns: number,
  layout: Layout,
  randomGenerator: RandomGenerator,
) => Coordinate[];
