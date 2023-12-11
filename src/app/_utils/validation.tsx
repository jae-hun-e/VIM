// 192.168.1.1
export const validatedIpAddress = (ipAddress: string) => {
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])){3}$/;
  return ipRegex.test(ipAddress);
};

// 00:1A:2B:3C:4D:5E
export const validatedMACAddress = (macAddress: string) => {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(macAddress);
};

export const validatedScopeIPAddress = (start: string, end: string) => {
  const ipToNumberArray = (ip: string) => ip.split('.').map(Number);

  const startIP = ipToNumberArray(start);
  const endIP = ipToNumberArray(end);

  for (let i = 0; i < 4; i++) {
    if (startIP[i] <= endIP[i]) continue;
    else return false;
  }

  return true;
};

// interface FormDataProps{
//   ip : string
//   max: string
// }
// export const validatedFormData =({ip, max}: FormDataProps){
//   if(!validatedIpAddress(ip)){
//     return 'ip주소값이 잘못 되었습니다.'
//   }
//
//   return true
// }
