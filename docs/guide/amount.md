# 金额处理

## 拆分金额为整数和小数部分

::: code-group

```ts [demo]
import { amountSplit } from 'one-js-utils-library';
amountSplit(1234); // ['1234']
amountSplit('5678.9'); // ['5678', '9']
amountSplit('1234.5678'); // ['1234', '5678'];
```

```ts [code]
const amountSplit = (amount: string | number) => {
  const amountStr: string =
    typeof amount === 'number' ? amount.toString() : amount;
  return amountStr.split('.');
};
```

:::

## 格式化金额

::: code-group

```ts [demo]
import { amountFormat } from 'one-js-utils-library';
amountFormat(1234); //1,234'
amountFormat(123456); // 123,456
amountFormat('1234.4567'); // 1,234.4567
amountFormat('123456.789'); // 123,456.789
amountFormat('56789'); // 56,789
```

```ts [code]
const amountFormat = (amount: string | number) => {
  const [integerPart, decimalPart = ''] = amountSplit(amount);

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );
  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
};
```

:::
