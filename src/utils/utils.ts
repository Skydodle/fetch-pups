// API calls starts from 0 index; Pagination is 9 items/ page
export const itemCount = (page: number) => {
  if (page === 1) {
    return 0;
  }
  if (page > 1) {
    return page * 9;
  }
};

// Slider value accessibility
export const valuetext = (value: number) => {
  return `${value}dog age`;
};
// "test": "react-scripts test --env=jsdom",

// Utility function to extract unique zip codes from an array of objects that include a zip_code property
export const extractUniqueZipCodes = (
  items: Array<{ zip_code: string }>,
): string[] => {
  const zipCodes = items.map((item) => item.zip_code);
  const uniqueZipCodes = [...new Set(zipCodes)];
  return uniqueZipCodes;
};
