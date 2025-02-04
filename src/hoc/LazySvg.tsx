import { ComponentProps, FC, useEffect, useRef, useState } from "react";

interface LazySvgProps extends ComponentProps<"svg"> {
  path: string;
}

const useLazySvgImport = (path: string) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        // <LazySvg path="../images/promo/brand-1" />
        importRef.current = (
          await import(/* @vite-ignore */ `${path}.svg?react`)
        ).default;
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [path]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};

export const LazySvg = ({ path, ...props }: LazySvgProps) => {
  const { loading, error, Svg } = useLazySvgImport(path);

  if (error) {
    return "An error occurred";
  }

  if (loading) {
    return "Loading...";
  }

  if (!Svg) {
    return null;
  }

  return <Svg {...props} />;
};
