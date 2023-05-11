//all globally used functions will be defined and exported from here

export const getRandomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};
