import * as XLSX from 'xlsx';

import { useState } from 'react';

import { InsertUploadBulkProps } from '@customTypes/reqestType';
const useReadExcel = () => {
  const [data, setData] = useState<InsertUploadBulkProps[] | null>(null);
  const readExcel = (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = function () {
      const data = fileReader.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      workBook.SheetNames.forEach(function (sheetName) {
        const rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        setData(JSON.parse(JSON.stringify(rows)));
      });
    };
  };
  return { data, readExcel };
};

export default useReadExcel;
