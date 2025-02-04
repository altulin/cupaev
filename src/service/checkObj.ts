/* eslint-disable @typescript-eslint/no-explicit-any */
export const checkObj = (data: any) => {
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    return true;
  }

  return false;
};
