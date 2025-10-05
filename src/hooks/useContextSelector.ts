import { use, useRef, useSyncExternalStore } from 'react';

type Listener = () => void;

export function createStore<T>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener>();

  return {
    getState: () => state,
    setState: (newState: Partial<T>) => {
      state = { ...state, ...newState };
      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe: (listener: Listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}

export default function useContextSelector<V, S extends Record<string, V>>(
  context: React.Context<ReturnType<typeof createStore<S>>>,
  selector: (state: S) => V,
  equalityFn: (a: V, b: V) => boolean = Object.is
) {
  const store = use(context);
  const prevValueRef = useRef<V>(selector(store.getState()));

  return useSyncExternalStore(
    store.subscribe,
    () => {
      const nextValue = selector(store.getState());
      const prevValue = prevValueRef.current;

      if (!equalityFn(prevValue, nextValue)) prevValueRef.current = nextValue;
      return prevValueRef.current;
    },
    () => selector(store.getState()) // for SSR
  );
}
