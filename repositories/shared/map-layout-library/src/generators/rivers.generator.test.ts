import { generateRivers } from "./rivers.generator";

describe("generateRivers", () => {
  describe("start from the top", () => {
    it ("should end at the bottom edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.1) // Starting direction (UP)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going DOWN
          .mockReturnValue(0.1) // Keep going DOWN
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the bottom edge of the grid
      expect(result[result.length - 1].y).toEqual(4);
    });

    it ("should end at the right edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.1) // Starting direction (UP)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going DOWN
          .mockReturnValue(0.6) // Switch direction to RIGHT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the right edge of the grid
      expect(result[result.length - 1].x).toEqual(4);
    });

    it ("should end at the left edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.1) // Starting direction (UP)
          .mockReturnValueOnce(0.6) // Starting x coordinate when going DOWN
          .mockReturnValue(0.6) // Switch direction to LEFT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the left edge of the grid
      expect(result[result.length - 1].x).toEqual(0);
    });
  });

  describe("start from the right", () => {
    it ("should end at the left edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.4) // Starting direction (RIGHT)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going LEFT
          .mockReturnValue(0.1) // Keep going LEFT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the left edge of the grid
      expect(result[result.length - 1].x).toEqual(0);
    });

    it ("should end at the top edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.4) // Starting direction (RIGHT)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going LEFT
          .mockReturnValue(0.6) // Switch direction to UP
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the top edge of the grid
      expect(result[result.length - 1].y).toEqual(0);
    });

    it ("should end at the bottom edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.4) // Starting direction (RIGHT)
          .mockReturnValueOnce(0.6) // Starting x coordinate when going LEFT
          .mockReturnValue(0.6) // Switch direction to DOWN
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the bottom edge of the grid
      expect(result[result.length - 1].y).toEqual(4);
    });
  });

  describe("start from the bottom", () => {
    it ("should end at the top edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.6) // Starting direction (DOWN)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going UP
          .mockReturnValue(0.1) // Keep going DOWN
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the top edge of the grid
      expect(result[result.length - 1].y).toEqual(0);
    });

    it ("should end at the right edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.6) // Starting direction (DOWN)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going UP
          .mockReturnValue(0.6) // Switch direction to RIGHT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the right edge of the grid
      expect(result[result.length - 1].x).toEqual(4);
    });

    it ("should end at the left edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.6) // Starting direction (DOWN)
          .mockReturnValueOnce(0.6) // Starting x coordinate when going UP
          .mockReturnValue(0.6) // Switch direction to LEFT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the left edge of the grid
      expect(result[result.length - 1].x).toEqual(0);
    });
  });

  describe("start from the left", () => {
    it ("should end at the right edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.8) // Starting direction (LEFT)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going RIGHT
          .mockReturnValue(0.1) // Keep going RIGHT
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the right edge of the grid
      expect(result[result.length - 1].x).toEqual(4);
    });

    it ("should end at the top edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.8) // Starting direction (LEFT)
          .mockReturnValueOnce(0.1) // Starting x coordinate when going RIGHT
          .mockReturnValue(0.6) // Switch direction to UP
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the right edge of the grid
      expect(result[result.length - 1].y).toEqual(0);
    });

    it ("should end at the bottom edge of the grid", () => {
      const mockRandomGenerator = {
        next: jest.fn()
          .mockReturnValueOnce(0.8) // Starting direction (LEFT)
          .mockReturnValueOnce(0.6) // Starting x coordinate when going RIGHT
          .mockReturnValue(0.6) // Switch direction to DOWN
      };

      const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

      // It should end at the left edge of the grid
      expect(result[result.length - 1].y).toEqual(4);
    });
  });
});
