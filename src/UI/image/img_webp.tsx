import { FC } from "react";

interface IImgWithFallback {
  src: string;
  fallback: string;
  type?: string;
  alt?: string;
}

const ImgWithFallback: FC<IImgWithFallback> = ({
  src,
  fallback,
  type = "image/webp",
  alt = "image",
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;
