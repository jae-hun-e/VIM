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

interface MappingOptions<T> {
  keyword: keyof T;
  value: keyof T;
  data: T[] | undefined;
}
export const mapping = <T>({ keyword, value, data }: MappingOptions<T>) => {
  if (!data) return;
  return data.reduce(
    (a, b) => {
      a[b[keyword] + '']
        ? a[b[keyword] + ''].push(b[value] + '')
        : (a[b[keyword] + ''] = [b[value] + '']);
      return a;
    },
    {} as Record<string, string[]>
  );
};
