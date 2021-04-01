import { readable } from "svelte/store";

let initialVal = Math.floor(Math.random()*100);

let counter = readable(initialVal, (set) => {
  let incrementCounter = setInterval( () => {
    let newVal = Math.floor(Math.random()*100);
    set(newVal);
  }, 1000);
  return () => {
    clearInterval(incrementCounter);
  };
});

export {counter}