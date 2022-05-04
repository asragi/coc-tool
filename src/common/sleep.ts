export const sleep = (waitSeconds: number, fn: () => any) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fn()), 1000 * waitSeconds);
  });
};
