// 拆分金额 为整数和小数部分
export const amountSplit = (amount: string | number) => {
  const amountStr: string =
    typeof amount === 'number' ? amount.toString() : amount;
  return amountStr.split('.');
};

// 格式化金额 20322 -> 20,322
export const amountFormat = (amount: string | number) => {
  const [integerPart, decimalPart = ''] = amountSplit(amount);

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
};
