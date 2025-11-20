import { useState, useEffect, RefObject } from 'react';

function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // If it's intersecting, set state to true and disconnect the observer
      // so it doesn't fire again.
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Disconnect on cleanup if it hasn't already
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
