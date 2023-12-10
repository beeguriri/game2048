import hotkeys from "hotkeys-js";

const observerMap: any = {}
// up, down, left, right

export function addKeyObserver(key: string, callback: any) {
  if(!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key: string, callback: any) {
  observerMap[key] = observerMap[key].filter((item: any) => item !== callback);
}

function executeCallbacks(key: string) {
  for (const ob of observerMap[key]) {
    ob();
  }
}