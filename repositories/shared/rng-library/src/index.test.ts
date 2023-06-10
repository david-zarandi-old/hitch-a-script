import { RandomGeneratorFactory } from './index';

describe('createSeededRandom', () => {
  it('should create consistent sequences for the same seed', () => {
    const rng1 = RandomGeneratorFactory(12345);
    const rng2 = RandomGeneratorFactory(12345);

    for (let i = 0; i < 10; i++) {
      expect(rng1.next()).toEqual(rng2.next());
    }
  });

  it('should create different sequences for different seeds', () => {
    const rng1 = RandomGeneratorFactory(12345);
    const rng2 = RandomGeneratorFactory(67890);

    let areEqual = true;
    for (let i = 0; i < 10; i++) {
      if (rng1.next() !== rng2.next()) {
        areEqual = false;
        break;
      }
    }

    expect(areEqual).toBe(false);
  });
});
