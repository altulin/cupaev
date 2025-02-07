export const firstQuery = (isTablet: boolean) => {
  return `?_page=1&_limit=${isTablet ? 10 : 3}`;
};
