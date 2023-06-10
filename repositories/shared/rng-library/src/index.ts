export type RandomGenerator = {
  next: () => number;
}

export function RandomGeneratorFactory(seed: number): RandomGenerator {
  let modulus = Math.pow(2, 32);
  let multiplier = 69069;
  let increment = 982451653; // Dijkstra prime

  return {
    next: function() {
      seed = (multiplier * seed + increment) % modulus;
      return seed / modulus;
    }
  };
}