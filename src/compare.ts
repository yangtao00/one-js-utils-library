// 比较版本大小
export const compareVersions = (versionA: string, versionB: string): number => {
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
