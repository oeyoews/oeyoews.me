export const capitalize = (text: string) => {
  return text.replace(
    /(\w)(\w*)/g,
    (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
  );
};
