import { useEffect, useRef } from 'react';

const useClickAway = (handler: () => void) => {
  const ref = useRef<HTMLElement | null>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return;
      !element.contains(e.target) && savedHandler.current();
    };

    document?.addEventListener('click', handleEvent);
    return () => {
      document?.removeEventListener('click', handleEvent);
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
