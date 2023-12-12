import * as XLSX from 'xlsx';
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

export const readExcel = async (file: File) => {
  let data;

  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);

  fileReader.onload = (e: ProgressEvent<FileReader>) => {
    if (!e.target) return;
    const bufferArray = e.target.result;
    const fileInformation = XLSX.read(bufferArray, {
      type: 'buffer',
      cellText: false,
      cellDates: true
    });
    const sheetName = fileInformation.SheetNames[0];
    const rawData = fileInformation.Sheets[sheetName];
    data = XLSX.utils.sheet_to_json(rawData);
  };

  return data;
};
