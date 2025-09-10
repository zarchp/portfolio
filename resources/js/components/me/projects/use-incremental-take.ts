import { useCallback, useMemo, useState } from 'react';

export function useIncrementalTake(opts: {
  initial?: number;
  step?: number;
  max: number;
}) {
  const { initial = 0, step = 6, max } = opts;
  const [take, setTake] = useState<number>(initial);

  const canShowMore = useMemo(() => take < max, [take, max]);

  const showMore = useCallback(() => {
    setTake((t) => Math.min(t + step, max));
  }, [step, max]);

  const reset = useCallback(() => setTake(initial), [initial]);

  return { take, canShowMore, showMore, reset };
}
