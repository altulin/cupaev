import { useMediaQuery } from "@uidotdev/usehooks";

const useIsSmallDevice = () => {
  return useMediaQuery("only screen and (max-width : 768px)");
};

export default useIsSmallDevice;
