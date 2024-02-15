import { useEffect, useRef, MutableRefObject } from "react";

type CallbackFunction = () => void;

export const useObserver = (
  ref: MutableRefObject<null>,
  callback: CallbackFunction,
  isLoading: boolean
): void => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    const cb: IntersectionObserverCallback = function (entries) {
      if (entries[0].isIntersecting) callback();
    };

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(cb);
    if (ref.current) observer.current.observe(ref.current);
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [ref, callback, isLoading]);
};
