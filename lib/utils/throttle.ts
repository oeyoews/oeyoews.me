export const throttle = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: any[]) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    }
  };
};
