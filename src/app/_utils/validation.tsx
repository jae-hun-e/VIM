export const validatedIpAddress = (ip: string) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.');
    for (const part of parts) {
      if (parseInt(part) > 255) {
        return false;
      }
    }
    return true;
  }
  return false;
};

export const validatedMACAddress = (max: string) => {};
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
