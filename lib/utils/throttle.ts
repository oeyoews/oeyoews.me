export const throttle = (func: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    if (!timeoutId) {
      console.log('throttle');
      timeoutId = setTimeout(() => {
        func.apply(null, args);
        // @ts-ignore
        timeoutId = '';
      }, delay);
    }
  };
};
