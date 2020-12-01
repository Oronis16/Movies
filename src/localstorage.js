// add function
// get function

const LS_PREFIX = "MSG";

export function add(data) {
  localStorage.setItem(LS_PREFIX, JSON.stringify(data));
}

export function getAll() {
  if (typeof window !== "undefined") {
    const key = localStorage.getItem(LS_PREFIX);
    console.log(key);
    if (key !== null) {
      return JSON.parse(key);
    } else {
      return [];
    }
  }
}
