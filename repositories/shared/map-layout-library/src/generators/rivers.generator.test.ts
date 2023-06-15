import { generateRivers } from "./rivers.generator";

describe("generateRivers", () => {
  it("Should generate rivers within the grid boundaries", () => {
    const mockRandomGenerator = {
      next: jest.fn().mockReturnValue(Math.random())
    };

    const result = generateRivers(5, 5, { roads: [], rivers: [], buildings: [], parks: [] }, mockRandomGenerator);

    // All generated coordinates should be within the grid
    result.forEach(({ x, y }) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(5);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(5);
    });
  });

  it("Should generate rivers irrespective of other elements in the layout", () => {
    const mockRandomGenerator = {
      next: jest.fn()
        .mockReturnValueOnce(0.1) // Starting direction (UP)
        .mockReturnValueOnce(0.1) // Starting x coordinate when going DOWN
        .mockReturnValue(0.1) // Keep going DOWN
    };

    const elements = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 0, y: 4 },
    ];

    const result = generateRivers(5, 5, { roads: elements, buildings: elements, parks: elements, rivers: [] }, mockRandomGenerator);

    // It should generate a river in the same coordinates as the "elements" coordinate array
    expect(result).toStrictEqual(elements);
  });

  describe("start from the top", () => {
    it("should end at the bottom edge of the grid", () => {
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

    it("should end at the right edge of the grid", () => {
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

    it("should end at the left edge of the grid", () => {
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
    it("should end at the left edge of the grid", () => {
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

    it("should end at the bottom edge of the grid", () => {
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
    it("should end at the top edge of the grid", () => {
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

    it("should end at the right edge of the grid", () => {
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

    it("should end at the left edge of the grid", () => {
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
    it("should end at the right edge of the grid", () => {
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

    it("should end at the top edge of the grid", () => {
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

    it("should end at the bottom edge of the grid", () => {
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
