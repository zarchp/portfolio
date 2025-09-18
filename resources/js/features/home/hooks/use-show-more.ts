import { useCallback, useState } from 'react';

export function useShowMore(initial = false) {
  const [expanded, setExpanded] = useState<boolean>(initial);

  const show = useCallback(() => setExpanded(true), []);
  const hide = useCallback(() => setExpanded(false), []);
  const toggle = useCallback(() => setExpanded((e) => !e), []);

  return { expanded, show, hide, toggle };
}
