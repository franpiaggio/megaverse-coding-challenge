export const GRID_SIZE = 11;
export const OFFSET_CROSS = 2;
export const API_URL = "https://challenge.crossmint.io/api";

export type Megaverse = Array<Array<string>>;
export type Payload = {
  row: string;
  column: string;
};

export function generateCross(mark: string, size: number = 0, offset: number = 0): Megaverse {
  let crossMap = new Array(11).fill("").map(() => new Array(11).fill(""));
  for (let i = offset; i < size - offset; i++) {
    crossMap[i][i] = mark;
  }

  for (let i = offset; i < size - offset; i++) {
    crossMap[i][10 - i] = mark;
  }
  return crossMap;
}

export const generateCleanGrid = (size: any = 0) =>
  new Array(size).fill("").map(() => new Array(size).fill(""));
