// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa

export function encode(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function decode(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
