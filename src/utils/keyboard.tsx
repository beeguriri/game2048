import hotkeys from 'hotkeys-js';

type KeyCallback = () => void;
type ObserverMap = Record<string, KeyCallback[]>;

const observerMap: ObserverMap = {};
// up, down, left, right

export function addKeyObserver(key: string, callback: () => void) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key: string, callback: () => void) {
  observerMap[key] = observerMap[key].filter(
    (item: () => void) => item !== callback,
  );
}

function executeCallbacks(key: string) {
  for (const ob of observerMap[key]) {
    ob();
  }
}
