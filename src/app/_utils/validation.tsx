export const validatedIpAddress = (ipAddress: string) => {
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])){3}$/;
  return ipRegex.test(ipAddress);
};

export const validatedMACAddress = (macAddress: string) => {
  const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macRegex.test(macAddress);
};
export const validatedScopeIPAddress = () => {};

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
