# 版本对比

## 版本对比

::: code-group

```ts [demo]
import { compareVersions } from 'one-js-utils-library';

compareVersions('1.2.3', '1.2.3'); // 0;
compareVersions('1.2.3', '1.2.4'); // -1;
compareVersions('1.2.4', '1.2.3'); // 1;
compareVersions('1.2.4', '1.2'); // 1
compareVersions('1.2.0', '1.2'); // 0
```

```ts [code]
const compareVersions = (versionA: string, versionB: string): number => {
  const segmentsA = versionA.split('.');
  const segmentsB = versionB.split('.');
  const len = Math.max(segmentsA.length, segmentsB.length);

  for (let i = 0; i < len; i++) {
    const numA = +segmentsA[i] || 0;
    const numB = +segmentsB[i] || 0;

    if (numA < numB) {
      return -1;
    } else if (numA > numB) {
      return 1;
    }
  }

  return 0;
};
```

:::
