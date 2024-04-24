export const getFirstPathname = (path: string) => {
  return path.split("/")[0] || path.split("/")[1];
};
