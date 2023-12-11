export function cls(...classnames: string[]) {
  return classnames.join(' ');
}

export const pageNation = (totalFloor: number) => {
  const floorPages: number[][] = [];
  const floorNum = totalFloor;
  if (floorNum <= 4) floorPages.push(Array.from({ length: floorNum }, (_, i) => i + 1));
  else {
    for (let i = 0; i < floorNum / 4 - 1; i++) {
      floorPages.push(Array.from({ length: 4 }, (_, idx) => idx + 1 + i * 4));
    }

    floorPages.push(
      Array.from({ length: floorNum % 4 }, (_, idx) => idx + 1 + Math.floor(floorNum / 4) * 4)
    );
  }
  return floorPages;
};
