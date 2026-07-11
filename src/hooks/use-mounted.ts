import { useSyncExternalStore } from "react";

/**
 * Returns `true` only after the component has mounted on the
 * client, and `false` during SSR / the very first client render.
 *
 * Used to gate client-only visuals (e.g. mouse-follower cursors,
 * spring-animated elements) whose values cannot be computed on
 * the server, without causing a hydration mismatch.
 *
 * Implemented with `useSyncExternalStore` (React's recommended
 * primitive for this exact case) instead of a `useState` +
 * `useEffect(() => setMounted(true), [])` pattern, which the
 * `react-hooks/set-state-in-effect` rule flags because it causes
 * an avoidable cascading re-render on mount.
 */
const emptySubscribe = () => () => {};

const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );
}
