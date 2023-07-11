// 验证手机号
export const validatePhone = (phone: string) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
};

export const validateEmail = (email: string) => {
  const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}/;
  return reg.test(email);
};
